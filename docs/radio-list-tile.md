---
title: Radio List Tile
---
# Radio List Tile
![Radio List Tile demo](/widgets/radio-list-tile.png)

A representation of [Radio Buttons](https://material.io/components/radio-buttons).

`NikuRadioListTile` accepts all the props as same as [RadioListTile](https://api.flutter.dev/flutter/material/RadioListTile-class.html).

```dart
// Using namespace
n.RadioListTile(true);

// Using Niku Prefix
NikuRadioListTile(true);
```

## Example Usage
```dart
n.RadioListTile(state)
    ..onChanged = updateState
    ..title = "Waltz of the Flowers".n
    ..subtitle = "Pyotr Ilyich Tchaikovsky".n;
```

### Set active color
```dart
n.RadioListTile(state)
    ..isDense
    ..onChanged = updateState
    ..title = "Waltz of the Flowers".n
    ..subtitle = "Pyotr Ilyich Tchaikovsky".n
    ..activeColor = Colors.blue
    ..titleColor = Colors.blue.shade100
    ..selectedTileColor = Colors.blue.shade400;
```

## Defination
[View Defination on pub.dev](https://pub.dev/documentation/niku/latest/widget_radioListTile/NikuRadioListTile-class.html)
