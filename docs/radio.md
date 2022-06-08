---
title: Radio
---
# Radio
![Radio demo](/widgets/radio.png)

A representation of [Radio Buttons](https://material.io/components/radio-buttons).

`NikuRadio` accepts all the props as same as [Radio](https://api.flutter.dev/flutter/material/Radio-class.html).

```dart
// Using namespace
n.Radio(true);

// Using Niku Prefix
NikuRadio(true);
```

## Example Usage
```dart
n.Radio(state)
    ..onChanged = updateState;
```

### Declarative color
Using declarative hook to update `MaterialStateProperty`, consists of:
- fillColor
- overlayColor

```dart
n.Radio(state)
    ..onChanged = updateState
    ..useFillColor(
        base: Colors.gray,
        hovered: Colors.blue,
        pressed: Colors.blue,
        focused: Colors.blue,
    )
    ..useOverlayColor(
        all: Colors.blue,
    );
```

## Defination
[View Defination on pub.dev](https://pub.dev/documentation/niku/latest/widget_radio/NikuRadio-class.html)
