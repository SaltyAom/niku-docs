---
title: Slider
---
# Slider
![Slider demo](/widgets/slider.png)

A representation of [Slider](https://material.io/components/sliders).

`NikuSlider` accepts all the props as same as [Slider](https://api.flutter.dev/flutter/material/Slider-class.html).

```dart
// Using namespace
n.Slider(50);

// Using Niku Prefix
NikuSlider(50);
```

## Example Usage
```dart
n.Slider(50)
    ..min = 0
    ..max = 100
    ..labels = RangeLabels(start.n, end.n);
    ..divisions = 5
    ..onChanged = updateState
```

### Customization
```dart
n.Slider(value)
    ..label = value.toString();
    ..overlayColor = Colors.white.withOpacity(.125)
    ..activeTrackColor = Colors.white.withOpacity(.75)
    ..inactiveTrackColor = Colors.white.withOpacity(.25)
```

### Change Thumb Shape
```dart
n.RangeSlider(50)
    ..trackHeight = 2
    ..thumbShape = RoundSliderThumbShape(enabledThumbRadius: 6);
```

## Defination
[View Defination on pub.dev](https://pub.dev/documentation/niku/latest/widget_slider/NikuSlider-class.html)
