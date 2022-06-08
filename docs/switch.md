---
title: Switch
---
# Switch
![Switch demo](/widgets/switch.png)

A representation of [Switch](https://material.io/components/switches).

`NikuListView` accepts all the props as same as [ListView](https://api.flutter.dev/flutter/material/Switch-class.html).

```dart
// Using namespace
n.Switch(true);

// Using Niku Prefix
NikuSwitch(true);
```

## Example Usage
```dart
n.Switch(state)
    ..onChanged = updateState;
```

### Using Cupertino Switch
```dart
n.Switch.cupertino(state)
    ..onChanged = updateState;
```

### Using adaptive
```dart
n.Switch.adaptive()
    ..activeColor = Colors.amber
    ..onChanged = updateState;
```

## Factory Method
Niku can accepts 3 factory method.

| Factory Method     | Equivalent Widget   |
|--------------------|---------------------|
| n.Switch           | [Switch](https://api.flutter.dev/flutter/material/Switch/Switch.html) |
| n.Switch.cupertino | [CupertinoSwitch](https://api.flutter.dev/flutter/cupertino/CupertinoSwitch-class.html) |
| n.Switch.adaptive  | [Switch.adaptive](https://api.flutter.dev/flutter/material/Switch/Switch.adaptive.html) |

## Defination
[View Defination on pub.dev](https://pub.dev/documentation/niku/latest/widget_switch/NikuSwitch-class.html)
