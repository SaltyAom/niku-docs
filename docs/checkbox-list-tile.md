---
title: Checkbox List Tile
---
# Checkbox List Tile
![Checkbox List Tile demo](/widgets/checkbox-list-tile.png)

A representation of [Checkbox](https://material.io/components/checkboxes).

`NikuCheckboxListTile` accepts all the props as same as [CheckboxListTile](https://api.flutter.dev/flutter/material/Checkbox-class.html).

```dart
// Using namespace
n.CheckboxListTile(true);

// Using Niku Prefix
NikuCheckboxListTile(true);
```

## Example Usage
```dart
n.CheckboxListTile(true)
    ..title = "Title".n
    ..subtitle = "This is a subtitle".n
    ..activeColor = Colors.red
    ..onChanged = handleChange;
```

## Defination
[View Defination on pub.dev](https://pub.dev/documentation/niku/latest/widget_checkboxListTile/NikuCheckboxListTile-class.html)
