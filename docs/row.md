---
title: Row
---
# Row
A representation of X-axis layout.

`NikuRow` accepts all the props as same as [Row](https://api.flutter.dev/flutter/widgets/Row-class.html).

```dart
// Using namespace
n.Row([]);

// Using Niku Prefix
NikuRow([]);
```

## Example Usage
```dart
n.Row([
    "Welcome".n,
    n.Button("Enter".n),
])
    ..mainCenter
    ..crossStart
    ..px = 16;
```

### Aligning items at the center
```dart
Row([
    "This should be".n,
    "at the center".n
])
    ..center
    ..wFull
    ..hFull;
```

### Scrollable
```dart
Row([
    "This should be".n,
    "at the center".n
])
    ..wFull
    ..hFull
    ..scrollable;
```

## Defination
[View Defination on pub.dev](https://pub.dev/documentation/niku/latest/widget_row/NikuRow-class.html)
