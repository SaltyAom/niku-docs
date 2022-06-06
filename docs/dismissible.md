---
title: Dismissible
---
# Dismissible
A representation of [List](https://material.io/components/lists).

`NikuDismissible` accepts all the props as same as [Dismissible](https://api.flutter.dev/flutter/widgets/Dismissible-class.html).

```dart
// Using namespace
n.Dismissible(LocalKey("1"));

// Using Niku Prefix
NikuDismissible(LocalKey("1"));
```

## Example Usage
```dart
n.Dismissible(
    LocalKey("1"),
    child: n.ListTile()
        ..title = "Paper Bouquet".n
        ..subtitle = "The Executioner and Her Way of Life".n
)
    ..onDismissed = handleDismiss;
```

### useDismiss on ListTile
Alternatively, you can use `useDismiss` on `n.ListTile` instead to reduce the boilerplate.

```dart
n.ListTile()
    ..title = "Paper Bouquet".n
    ..subtitle = "The Executioner and Her Way of Life".n
    ..key = LocalKey("1")
    // n.Dismissible instance
    ..useDismiss((v) => v
        ..onDismissed = handleDismiss,
    );
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

## Defination
[View Defination on pub.dev](https://pub.dev/documentation/niku/latest/widget_dismissible/NikuDismissible-class.html)
