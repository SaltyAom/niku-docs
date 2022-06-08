---
title: Wrap
---
# Wrap
A representation of axis layout.

`NikuWrap` accepts all the props as same as [Wrap](https://api.flutter.dev/flutter/widgets/Wrap-class.html).

##### It's recommended to use [Column](/column) or [Row](/row) instead of Wrap.

```dart
// Using namespace
n.Wrap([]);

// Using Niku Prefix
NikuWrap([]);
```

## Example Usage
```dart
n.Wrap([
    "Welcome".n,
    n.Button("Enter".n),
])
    ..runStart
    ..runSpacing = 8;
```

### Aligning items at the center
```dart
n.Wrap([
    "This should be".n,
    "at the center".n
])
    ..center;
```

### Set axis
```dart
n.Wrap([])
    ..vertical
    ..crossCenter;
```

## Defination
[View Defination on pub.dev](https://pub.dev/documentation/niku/latest/widget_wrap/NikuWrap-class.html)
