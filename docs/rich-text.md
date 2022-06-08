---
title: Rich Text
---
# Rich Text
A representation of [Typography](https://material.io/design/typography/the-type-system.html).

`NikuRichText` accepts all the props as same as [RichText](https://api.flutter.dev/flutter/widgets/RichText-class.html).

```dart
// Using namespace
n.RichText(
    n.TextSpan(""),
);

// Using Niku Prefix
NikuRichText(
    NikuTextSpan(""),
);
```

## Example Usage
```dart
n.RichText(
    n.TextSpan("Rich Text: ")
        ..color = Colors.black
        ..children = [
            n.TextSpan("with "),
            n.TextSpan("underline")..underline,
            n.TextSpan(" and "),
            n.TextSpan("italic")..italic,
        ],
);
```

### Using extension
```dart
"Rich Text: ".n.rich
    ..useSpan((w) => w
        ..color = Colors.black
        ..children = [
            "with ".n.span,
            "underline".n.span..underline,
            " and ".n.span,
            "italic".n.span..italic,
        ]);
```

## Defination
[View Defination on pub.dev](https://pub.dev/documentation/niku/latest/widget_richText/NikuRichText-class.html)
