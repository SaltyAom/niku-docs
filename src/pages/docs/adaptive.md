---
layout: ../../layouts/doc.astro
prev: use-transition
next: styled-widget
title: Adaptive
---
Want to have your UI native to OS your app is running on? Niku got you cover.

With some Widget that should feels native like `Alert`, `Switch`, Niku have predefined `factory method` for to handle style switching between OS.

Niku Widget that supports `adaptive` factory including:
- Alert
- Slider
- Switch
- TextFormField

To use adaptive widget, simply construct widget with `adaptive`, then Niku will automatically handle the styling on OS for you.
```dart
n.Switch.adaptive()
  ..trackColor = Colors.blue
```

## Alert
For Alert, it does require a little bit of tweaking to have your alert feels like native, because the `showDialog` and `showCupertinoDialog` has difference kind of parameter and animations.

But Niku got you cover with custom method for handling showDialog, the `showNikuDialog` with handle context switching between OS, then you can just use `NikuAlert.adaptive`.

Example of adaptive dialog:
```dart
final showAlert = () {
  n.showDialog(
    context: context,
    builder: (context) => n.Alert.adaptive()
      ..title = Text("Hello World")
      ..content = Text("This is alert dialog written in Niku")
  );
};
```

## Alert Context Switching
Niku not only handle context switching for just `showDialog` and `Alert`, it also handle context switching native widget for you for example for `Button` to `CupertinoDialogAction` if you use `adaptive Alert`.

Context switching widgets:
- Button => CupertinoDialogAction
- TextFormField => CupertinoTextField

This will ensure that your alert looks native on both iOS and Android.

The code below does context switching between iOS and Android, notice that we use `NikuButton` and `NikuTextFormField` only.
```dart
final showAlert = () {
  n.showDialog(
    context: context,
    builder: (context) => n.Alert.adaptive()
      ..title = Text("Hello World")
      ..content = n.Column([
        Text("This is alert dialog written in Niku"),
        n.TextFormField.adaptive("Placeholder").niku..mt = 16,
      ])
      ..actions = [
        n.Button(Text("Delete"))
          ..onPressed = () {
            Navigator.of(context).pop();
          }
          ..useTextStyle((v) => v..color = Colors.red)
          ..useButtonStyle((v) => v..splash = Colors.red.withOpacity(.15)),
        n.Button(Text("Cancel"))
          ..onPressed = () {
            Navigator.of(context).pop();
          }
          ..useTextStyle((v) => v..bold),
      ],
  );
};
```
