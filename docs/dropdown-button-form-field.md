---
title: Dropdown Button Form Field
---
# Dropdown Button Form Field
A representation of [Menu](https://material.io/components/menus).

`NikuDropDownButtonFormField` accepts all the props as same as [DropDownButtonFormField](https://api.flutter.dev/flutter/widgets/DropDownButtonFormField-class.html).

```dart
// Using namespace
n.DropDownButtonFormField();

// Using Niku Prefix
NikuDropDownButtonFormField();
```

## Example Usage
```dart
final options = ["Bael", "Paimon", "Babatos"];

n.DropdownButtonFormField<String>(value)
    ..labelText = "Solomon Lesser Demons"
    ..itemsValue = options
    ..onChanged = handleChange;
```

### With Label Constructor
```dart
final options = ["Bael", "Paimon", "Babatos"];

n.DropdownButtonFormField<String>.label("Solomon Lesser Demons")
    ..value = value
    ..itemsValue = options
    ..onChanged = handleChange;
```

## Factory Method
Niku can accepts 6 factory method.

| Factory Method                    | Equivalent Widget          |
|-----------------------------------|----------------------------|
| n.DropDownButtonFormField         | [DropDownButtonFormField](https://api.flutter.dev/flutter/material/DropdownButtonFormField-class.html) |
| n.DropDownButtonFormField         | [DropDownButtonFormField](https://api.flutter.dev/flutter/material/DropdownButtonFormField-class.html) |

## Defination
[View Defination on pub.dev](https://pub.dev/documentation/niku/latest/widget_dropdownButtonFormField/NikuDropdownButtonFormField-class.html)
