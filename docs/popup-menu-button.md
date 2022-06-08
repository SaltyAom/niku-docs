---
title: Popup Menu Button
---
# Popup Menu Button
![Popup Menu Button demo](/widgets/popup-menu-button.png)

A representation of [Popup Menu Button](https://material.io/components/menus).

`NikuPopupMenuButton` accepts all the props as same as [PopupMenuButton](https://api.flutter.dev/flutter/material/PopupMenuButton-class.html).

```dart
// Using namespace
n.PopupMenuButton<T>(Icons.edit);

// Using Niku Prefix
NikuPopupMenuButton<T>(Icons.edit);
```

## Example Usage
```dart
n.PopupMenuButton<int>(Icons.edit)
    ..items = [1, 2, 3]
    ..onSelected = handleSelect
    ..color = Colors.blue;
```

## Defination
[View Defination on pub.dev](https://pub.dev/documentation/niku/latest/widget_popupMenuButton/NikuPopupMenuButton-class.html)
