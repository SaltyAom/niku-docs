---
title: Icon Button
---
# Icon Button
![Icon Button demo](/widgets/icon-button.png)

A representation of [Icon Button](https://material.io/develop/web/components/buttons/icon-buttons).

`NikuIconButton` accepts all the props as same as [IconButton](https://api.flutter.dev/material/widgets/IconButton-class.html).

```dart
// Using namespace
n.IconButton(Icons.home)

// Using Niku Prefix
NikuIconButton(Icons.home)
```

## Example Usage
```dart
n.IconButton(Icons.home)
    ..onPressed = handlePress
    ..iconSize = 24
    ..splshColor = Colors.blue.withOpacity(.125)
    ..p = 16;
```

### Using IconButton.widget
You can pass any widget into IconButton not limited to icon.

```dart
n.IconButton("π".n)
    ..onPressed = handlePress
    ..iconSize = 24;
```

## Factory Method
Niku can accepts 2 factory method.

| Factory Method        | Equivalent Widget   |
|-----------------------|---------------------|
| n.IconButton          | [IconButton](https://api.flutter.dev/flutter/material/TextButton-class.html) |
| n.IconButton.widget   | - |


## Defination
[View Defination on pub.dev](https://pub.dev/documentation/niku/latest/widget_iconButton/NikuIconButton-class.html)
