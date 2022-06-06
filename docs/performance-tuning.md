---
title: Performance Tuning
---
# Performance Tuning
Niku is most of the time, is fast enough.

As it's slightly slower than native Flutter widget construction by just 10%.

But in a rare scenario where you come across that Niku isn't just performanced enough, like heavy animation, lots of widget allocation.

You can tune them.

## Pseudo Constant
Widget with **const** will not be repaint.
Flutter skip collision and rendering of the children of the Widgets, improving performance using with `StatefulWidget`.

As Niku widget can’t be const because not every field can be final.
Niku provide you utilities to prevent a repaint.

- .freezed
- .deps
- NikuOn / n.On

## Freezed
Simply add .freezed to expensive Widget which doesn’t required any change no matter what.
```dart
n.Button("".)
    ..apply = ExpensiveStyle.button
    ..freezed;
```

Niku will cache that widget and return the same widget no matter what.

## Deps
Deps is stand for **dependencies**.
Basically, you provide a state that might trigger a re-render to the widget.

```dart
n.Button("".)
    ..apply = ExpensiveStyle.button
    ..deps = [
        color,
        expensiveState
    ];
```

Now widget will only re-render when "color", and "expensiveState" changed.
Otherwise, it will return a cached widget.

## NikuOn
For extreme situation where `.deps` and `.freezed` is not enough.
Last resort is to use `NikuOn` or `n.On`.

This is a custom widget which does the same job as on but will also prevent the allocation of Widget itself.

```dart
n.On(
    n.Button("".)
        ..apply = ExpensiveStyle.button
);
```

Because of dot cascade purpose, every Niku widget always allocate some memory even if it doesn’t get repaint, using NikuOn will prevent that memory allocation and only allocate when only the state is change.

## Drawback
The only performance drawback is that it will compare state **everytime** the state is updated.

However logical comparison is usually cheap for primitive value as Dart compiled down to instruction code and compare the value of memory allocation.

## It’s ok to opts out
However, if some part of your apps still not performance enough and you sure Niku is the bottleneck (which is rarely to happens).

It’s ok to opts Niku out of that Widget.
Niku is just a tool, it doesn’t force you to always use the Niku widgets.

It only goal is to help you develop Flutter app a little bit easier (increase DX).
