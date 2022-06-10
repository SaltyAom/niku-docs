---
title: Introduction
---
# Introduction
Sometime, structuring Flutter widget is a bit too complex, and verbose.

Because Flutter treat almost everything as a widget, mixing between an actual representation component and styling property as a widget. Things get confusing very fast.

Take a look at this:
```dart
Padding(
  padding: EdgeInsets.all(20),
  child: Text(
    "Hello World",
    style: const TextStyle(
      color: Colors.blue,
      fontSize: 21,
    ),
  ),
);
```

- `Text` is the actual UI representation
- `Padding` is an property which applied to the descendant

---
Mixing UI components with and property looks very confusing as it leads to:
- Too much widget, knowns as "**Nested Hell**"
- Unable to focused main part of the UI
- Mixing business logic with UI Representation

Things get confusing very quick, adding more and more widgets and styling.

## Property styling
However, Niku proposed the new syntax:
```dart
import 'package:niku/namespace.dart' as n;

n.Text("Hello Niku")
  ..color = Colors.blue
  ..fontSize = 21
  ..m = 20; // margin
```

As you might have guessed, Niku treat **property widget as property**, chaining it to read from top-to-bottom style.

Putting you in the focus on the widget that actually matter to UI Representation.
Making it more predictable and straightforward.

Parent property also supports all the 3<sup>rd</sup> party widget, ensure that Niku can goes along with any codebase.

## Reimplemented Widget
What make Niku differs from others chaining styling library is that, Niku rewrite important widgets and make it accepts **cascade notation instead of props** but still accepts the same props.


So you can style all the widget in the same convention, instead of mixing props and chaining.
```dart
// ⚠️ Different convention might be confusing
n.Text(
    "Mixed",
    style: TextStyle(
        fontSize: 21,
        color: Colors.blue,
    )
)
    ..mt = 20   // Padding top 
    ..mx = 8;   // Padding x-axis

// ✅ This is also fine
n.Text("Mixed")
    ..fontSize = 21
    ..color = Colors.blue
    ..mt = 20
    ..mx = 8;
```

## Adaptive property
Niku also features some unique handy property property you might have always wanted.

Like `useThemeSelector`, which adapt the property to device's theme color:
```dart
"Theme awareness".n  // String to Text shortcut
    ..useThemeSelector(
        light: (v) => v..color = Colors.black,
        dark: (v) => c..color = Colors.white,
    );
```

Or `useTransition` that auto animate transition between value:
```dart
n.Box()
    ..size = [100, 100]
    // Animate from simple state
    ..useTransition(
        value: value,
        builder: (widget, value) => widget..bg = value,
    );
```

Whether you find styling with cascade notation easy, or extra property comes in handy, Niku will always try to make your code base easier, returning power to your hand again.
