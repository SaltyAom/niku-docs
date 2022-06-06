---
title: Button
---
# Button
A representation of [Button](https://material.io/components/buttons/flutter#toggle-button).

`NikuButton` accepts all the props as same as [Button](https://api.flutter.dev/flutter/material/TextButton-class.html).

```dart
// Using namespace
n.Button("".n);

// Using Niku Prefix
NikuButton("".n);
```

## Example Usage
```dart
n.Button("My Button".n)
    ..color = Colors.blue
    ..splash = Colors.blue.withOpacity(.1)
    ..fontSize = 16
    ..bold
    ..rounded = 8
    ..px = 16
    ..py = 8;
```

## Factory Method
Niku can accepts 6 factory method.

| Factory Method        | Equivalent Widget   |
|-----------------------|---------------------|
| n.Button              | [TextButton](https://api.flutter.dev/flutter/material/TextButton-class.html)          |
| n.Button.icon         | [TextButton.icon](https://api.flutter.dev/flutter/material/TextButton-class.html)     |
| n.Button.elevated     | [ElevatedButton](https://api.flutter.dev/flutter/material/ElevatedButton-class.html)      |
| n.Button.elevatedIcon | [ElevatedButton.icon](https://api.flutter.dev/flutter/material/ElevatedButton-class.html) |
| n.Button.outlined     | [OutlinedButton](https://api.flutter.dev/flutter/material/OutlinedButton-class.html)      |
| n.Button.outlinedIcon | [OutlineButton.icon](https://api.flutter.dev/flutter/material/OutlinedButton-class.html)  |

## Defination
[View Defination on pub.dev](https://pub.dev/documentation/niku/latest/widget_button/NikuButton-class.html)