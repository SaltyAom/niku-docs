---
layout: ../../layouts/doc.astro
next: hook
title: Quickstart
---
It's easy to to get start with Niku.

Like any other Flutter widget, all you have to do is just add niku to your `pubspec.yaml` and that's it.
```yaml
// pubspec.yaml
dependencies:
  flutter:
    sdk: flutter

  niku: 2.0.0
```

Niku doesn't require any native side implementation, it just work out of the box.

## Add Niku Widget
All Niku does is provide you a collection of widgets to be used.
These widgets name is prefix with `Niku`, for example `NikuText` is equivalent to Flutter's `Text`.

To use Niku widget, you can either use the full name or a shorten name which can be import from `namespace.dart`.
```dart
import 'package:niku/niku.dart';
import 'package:niku/namespace.dart' as n;

NikuText("Hello World") // This is fine
n.Text("Hello World")   // This is also fine
```

You don't have to force yourself to use `namespace.dart`, in fact it's just type aliased of `Niku` prefixed widget.

## Style Builder
The main feature of Niku is that it allows you to use dot cascade setter to style property of the widget.
```dart
n.Text("Styled Text")
  ..fontSize = 16
  ..color = Colors.red
```

Every property of dot cascade is directly mapped from the widget itself.
Notice that `fontSize` and `color` is also available in native Text property?

Over the dot cascade, is that it has a shortcut property that doesn't require any value like `bold`.
```dart
n.Text("Styled Text")
  ..fontSize = 16
  ..color = Colors.red
  ..bold
  ..center
```

If you want to pass the props like normal Flutter is also fine, Niku widget only add `dot cascade` to the widget, everything else works almost like native Flutter.

Niku will handle the collision and return the styled widget as you expected.
```dart
n.Text("Styled Text",
  textAlign: TextAlign.center
)
  ..fontSize = 16
  ..color = Colors.red
  ..bold
```
