---
title: Selectable Text
---
# Selectable Text
A representation of [Typography](https://material.io/design/typography/the-type-system.html).

`NikuSelectableText` accepts all the props as same as [Selectable Text](https://api.flutter.dev/flutter/material/SelectableText-class.html).

```dart
// Using namespace
n.SelectableText("");

// Using Niku Prefix
NikuSelectableText("");
```

## Example Usage
```dart
n.SelectableText("I'm selectable");
```

### Using extension
```dart
"I'm selectable".n.select;
```

### Adding toolbars
```dart
"I'm selectable".n.select
    ..toolbarOptions = ToolbarOptions(
        copy: true,
        selectAll: true,
    );
```

## Defination
[View Defination on pub.dev](https://pub.dev/documentation/niku/latest/widget_selectableText/NikuSelectableText-class.html)
