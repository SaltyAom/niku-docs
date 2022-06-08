---
title: Text
---
# Text
A representation of [Typography](https://material.io/design/typography/the-type-system.html).

`NikuText` accepts all the props as same as [Text](https://api.flutter.dev/flutter/widgets/Text-class.html).

```dart
// Using namespace
n.Text("Hello World");

// Using Niku Prefix
NikuText("Hello World");
```

## Example Usage
```dart
n.Text("Hello World")
    ..color = Colors.blue
    ..fontSize = 21
    ..bold;
```

### Using extension
```dart
"Hello World".n
    ..color = Colors.blue
    ..bold;
```

## Defination
[View Defination on pub.dev](https://pub.dev/documentation/niku/latest/widget_text/NikuText-class.html)
