---
title: TextSpan
---
# Text Span
A representation of [Typography](https://material.io/design/typography/the-type-system.html).

`NikuTextSpan` accepts all the props as same as [RichText](https://api.flutter.dev/flutter/widgets/RichSpan-class.html).

```dart
// Using namespace
n.TextSpan("");

// Using Niku Prefix
NikuTextSpan("");
```

## Example Usage
```dart
n.TextSpan("Rich Text: ")
    ..color = Colors.black
    ..children = [
        n.TextSpan("with "),
        n.TextSpan("underline")..underline,
        n.TextSpan(" and "),
        n.TextSpan("italic")..italic,
    ];
```

### Using extension
```dart
"Rich Text: ".n.span
    ..color = Colors.black;
```

## Defination
[View Defination on pub.dev](https://pub.dev/documentation/niku/latest/widget_textSpan/NikuTextSpan-class.html)
