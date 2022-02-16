---
layout: ../../layouts/doc.astro
prev: hook
next: naming-convention
title: Performance
---
## Pseudo Constant
Widget with `const` will not be repaint, Flutter skip collision and rendering of the children of the Widgets which improve performance when using with `StatefulWidget` by skipping expensive part.

Because when state is change, Flutter will attempt to try to render the whole widget down below too.

As Niku widget can't be `const` because not every field can be `final`.

These utilities Niku provided will prevent itself and children from being re-render by providing comparing the previous state and new state of the widget you provided. If the state is the same, Niku will tells Flutter to skip the repaint and re-render process same like `const`.
- `.on`
- `.freezed`
- `NikuOn` / `n.On`

The only performance drawback is that it will compare state everytime state is updated, however logical comparison is usually cheap for primitive value as Dart compiled down to instruction code and compare the value of memory allocation. 

But at least it's certainly cheaper than doing the whole repaint itself than comparing memory allocation.

Simply add `.freezed` to expensive Widget which doesn't required any change no matter what.
```dart
n.Text("Hello World")
  ..freezed
```

For widget which depends on some state, simply use `.on` and add the states which when changed will update the widget.
```dart
n.Text("Counter: ${counter}")
  ..on = [counter]
```

## Niku On
For extreme situation where `.on` and `.freezed` is not enough, simply use `NikuOn`.

This is a custom widget which does the same job as `on` but will also prevent the allocation of Widget itself.

Because of dot cascade purpose, every Niku widget always allocate some memory even if it doesn't get repaint, using `NikuOn` will prevent that memory allocation and only allocate when only the state is change.

```dart
NikuOn(
  () => NikuText("Counter: ${counter}"), 
  [counter],
);

// Or with namespace
import 'package:niku/namespace.dart' as n;

n.On(
  () => n.Text("Counter: ${counter}"), 
  [counter],
);
```

Although, `NikuOn` have significant increase in performance, but Niku is build on top of the idea to improve `Developer Experience` first while `NikuOn` added more nested syntax to the widget itself which is harder to maintain.

Thus, `.freezed` and `.on` is fast enough for most of the time.

## Memory Allocation
Every Niku class is just a simple `Stateless Widget`.

A stateless widget that hold the properties of the widget that it's going to render.

With `extension` method that is reuse on many Niku widget to shorten the getter and setter process.

For example, this is the entire source code of `NikuColumn`:
```dart
class NikuColumn extends StatelessWidget
    with
        NikuBuildMacro,
        UseQueryMacro<NikuColumn>,
        ClipMacro,
        CrossAxisAlignmentMacro,
        GapMacro,
        MainAxisAlignmentMacro,
        MainAxisSizeMacro,
        TextBaselineMacro,
        TextDirectionMacro,
        VerticalDirecrtionMacro {
  // Holds Widget properties
  List<Widget> children;

  MainAxisAlignment? mainAxisAlignment;
  MainAxisSize? mainAxisSize;
  CrossAxisAlignment? crossAxisAlignment;
  TextDirection? textDirection;
  VerticalDirection? verticalDirection;
  TextBaseline? textBaseline;
  Clip? clipBehavior;

  // Handle constructor
  NikuColumn(
    this.children, {
    Key? key,
    this.mainAxisAlignment,
    this.mainAxisSize,
    this.crossAxisAlignment,
    this.textDirection,
    this.verticalDirection,
    this.textBaseline,
  }) : super(key: key);

  // Apply widget
  set apply(NikuColumn? v) {
    if (v == null) return;

    mainAxisAlignment = v.mainAxisAlignment ?? mainAxisAlignment;
    mainAxisSize = v.mainAxisSize ?? mainAxisSize;
    crossAxisAlignment = v.crossAxisAlignment ?? crossAxisAlignment;
    textDirection = v.textDirection ?? textDirection;
    textBaseline = v.textBaseline ?? textBaseline;
  }

  // Copy the widget itself
  NikuColumn get copied => NikuColumn(
        children,
        key: key,
        mainAxisAlignment: mainAxisAlignment,
        mainAxisSize: mainAxisSize,
        crossAxisAlignment: crossAxisAlignment,
        textDirection: textDirection,
        verticalDirection: verticalDirection,
        textBaseline: textBaseline,
      );

  // Return a widget
  Column get widget => Column(
        children: childrenWithGap ?? children,
        key: key,
        mainAxisAlignment: mainAxisAlignment ?? MainAxisAlignment.start,
        mainAxisSize: mainAxisSize ?? MainAxisSize.max,
        crossAxisAlignment: crossAxisAlignment ?? CrossAxisAlignment.center,
        textDirection: textDirection,
        verticalDirection: verticalDirection ?? VerticalDirection.down,
        textBaseline: textBaseline,
      );
}
```

That's the entire code of `NikuColumn`.

But you might wonder about the abstract classes that implemented here.

But take a look at one of the "Macro".
```dart
abstract class CrossAxisAlignmentMacro {
  CrossAxisAlignment? crossAxisAlignment;

  set crossAxis(CrossAxisAlignment value) => crossAxisAlignment = value;
  void get crossStart => crossAxisAlignment = CrossAxisAlignment.start;
  void get crossCenter => crossAxisAlignment = CrossAxisAlignment.center;
  void get crossEnd => crossAxisAlignment = CrossAxisAlignment.end;
  void get crossBaseline => crossAxisAlignment = CrossAxisAlignment.baseline;
  void get crossStretch => crossAxisAlignment = CrossAxisAlignment.stretch;

  void get baseline => crossAxisAlignment = CrossAxisAlignment.baseline;
  void get stretch => crossAxisAlignment = CrossAxisAlignment.stretch;
}
```

That's an entire code of the macro classes.

These tiny classes  holds a blueprint property and provide some getter and setter method, that's all.

All of the Niku classes is implemented by these macro and reuses everywhere, so the allocation of these classes is shared.

## It's ok to opts out
However, if some part of your apps still not performance enough and you sure Niku is the bottleneck (which is rarely to happens).

It's ok to opts Niku out of that Widget.
Niku is just a tool, it doesn't force you to always use the Niku widgets.

It only goal is to help you develop Flutter app a little bit easier (increase DX).
But if it weight performance of your app down, it's ok to not use Niku on that part.
