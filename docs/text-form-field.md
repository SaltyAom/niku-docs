---
title: Text Form FIeld
---
# Text Form Field
![Text Form Field demo](/widgets/text-form-field.png)

A representation of [Text Field](https://material.io/components/text-fields).

`NikuTextFormField` accepts all the props as same as [TextField](https://api.flutter.dev/flutter/material/TextField-class.html).

```dart
// Using namespace
n.TextFormField();

// Using Niku Prefix
NikuTextFormField();
```

## Example Usage
```dart
n.TextFormField()
    ..controller = controller
    ..labelText = "Username";
```

### As password
```dart
n.TextFormField()
    ..asPassword
    ..labelText = "Password";
```

### Adding prefix icon
```dart
n.TextFormField()
    ..prefixIcon = Icon(Icons.edit);
```

### Decorate as outlined
```dart
n.TextFormField()
    ..outlined;
```

### Decorate as filled
```dart
n.TextFormField()
    ..isFilled;
```

### Remove underline
```dart
n.TextFormField()
    ..noUnderline;
```

### Set prefix/suffix style
```dart
n.TextFormField()
    ..labelText = "Value"
    ..usePrefixStyle((v) => v..color = Colors.white);
```

### Decorate border
```dart
n.TextFormField()   
    ..rounded = 16
    ..useBorderWidth(all: 2)
    ..useBorderColor(bottom: Colors.blue);
```

## Factory Method
Niku can accepts 5 factory method.

| Factory Method            | Equivalent Widget   |
|---------------------------|---------------------|
| n.TextFormField           | [TextFormField](https://api.flutter.dev/flutter/material/TextFormField/TextFormField.html) |
| n.TextFormField.cupertino | [CupertinoTextField](https://api.flutter.dev/flutter/cupertino/CupertinoTextField-class.html) |
| n.TextFormField.adaptive  | - |
| n.TextFormField.hint      | - |
| n.TextFormField.label     | - |

## Defination
[View Defination on pub.dev](https://pub.dev/documentation/niku/latest/widget_textFormField/NikuTextFormField-class.html)
