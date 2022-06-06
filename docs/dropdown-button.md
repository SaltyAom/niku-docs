---
title: Dropdown Button
---
# Dropdown Button
A representation of [Menu](https://material.io/components/menus).

`NikuDropDownButton` accepts all the props as same as [DropDownButton](https://api.flutter.dev/flutter/material/DropdownButton-class.html).

```dart
// Using namespace
n.DropDownButton<T>(state);

// Using Niku Prefix
NikuDismissible<T>(state);
```

## Example Usage
```dart
final options = ["Mountain", "Ocean", "Star"];

n.DropdownButton<String>(option.value)
    ..itemsValue = options
    ..onChanged = updateNewValue;
```

## Defination
[View Defination on pub.dev](https://pub.dev/documentation/niku/latest/widget_dropdownButton/NikuDropdownButton-class.html)
