---
title: Column
---
# Column
A representation of Y-axis layout.

`NikuColumn` accepts all the props as same as [Column](https://api.flutter.dev/flutter/widgets/Column-class.html).

```dart
// Using namespace
n.Column([]);

// Using Niku Prefix
NikuColumn([]);
```

## Example Usage
```dart
n.Column([
    "Welcome".n,
    n.Button("Enter".n),
])
    ..mainCenter
    ..crossStart
    ..px = 16;
```

### Aligning items at the center
```dart
Column([
    "This should be".n,
    "at the center".n
])
    ..center
    ..wFull
    ..hFull;
```

### Scrollable
```dart
Column([
    "This should be".n,
    "at the center".n
])
    ..wFull
    ..hFull
    ..scrollable;
```

## Defination
[View Defination on pub.dev](https://pub.dev/documentation/niku/latest/widget_column/NikuColumn-class.html)
