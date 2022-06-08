---
title: Stack
---
# Stack
A representation of Z-axis layout.

`NikuStack` accepts all the props as same as [Stack](https://api.flutter.dev/flutter/widgets/Stack-class.html).

```dart
// Using namespace
n.Stack([]);

// Using Niku Prefix
NikuStack([]);
```

## Example Usage
```dart
n.Stack([
    "Welcome".n,
    n.Button("Enter".n),
])
    ..topStart
    ..loose;
```

### Aligning items at the center
```dart
n.Stack([
    "This should be".n,
    "at the center".n
])
    ..center
    ..wFull
    ..hFull;
```

## Defination
[View Defination on pub.dev](https://pub.dev/documentation/niku/latest/widget_stack/NikuStack-class.html)
