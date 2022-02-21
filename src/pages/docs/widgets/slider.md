---
layout: ../../../layouts/doc.astro
title: Slider
---
Representation of Slider


To use this widget, simply import from the of the following:
```dart
import 'package:niku/niku.dart';
import 'package:niku/namespace.dart';
import 'package:niku/widget/widget.dart';
import 'package:niku/widget/slider.dart';
```
## Factory method:
- adaptive
- cupertino


## Cascasde properties:
To use dot cascade, simply use the following syntax:

```dart
NikuSlider
  ..data = data
  ..sliderType = data
```

## Macros:
This widget implement the following macros (shortcut):
- [ApplyTextMacro](/docs/macros/applyText)
- [ApplyValueIndicatorTextStyleMacro](/docs/macros/applyValueIndicatorTextStyle)

## ApplyTextMacro
Implement [ApplyTextMacro](/docs/macros/applyText) abstract class

### applyTextStyle `set`

Arguments:
```dart
(NikuTextStyle v) 
```

Equivalent to:
```dart
{
    if (style == null) style = NikuTextStyle();

    style?.apply = v;
  }
```

### useTextStyle `hook`

Equivalent to:
```dart
{
    if (style == null) style = NikuTextStyle()
}
```

## ApplyValueIndicatorTextStyleMacro
Implement [ApplyValueIndicatorTextStyleMacro](/docs/macros/applyValueIndicatorTextStyle) abstract class

### applyTextStyle `set`

Arguments:
```dart
(NikuTextStyle v) 
```

Equivalent to:
```dart
{
    if (valueIndicatorTextStyle == null)
      valueIndicatorTextStyle = NikuTextStyle();

    valueIndicatorTextStyle?.apply = v;
  }
```

### applyValueIndicatorTextStyle `set`

Arguments:
```dart
(NikuTextStyle v) 
```

Equivalent to:
```dart
{
    if (valueIndicatorTextStyle == null)
      valueIndicatorTextStyle = NikuTextStyle();

    valueIndicatorTextStyle?.apply = v;
  }
```

### useTextStyle `hook`

Equivalent to:
```dart
{
    if (valueIndicatorTextStyle == null)
      valueIndicatorTextStyle = NikuTextStyle()
}
```

### useValueIndicatorTextStyle `hook`

Equivalent to:
```dart
{
    if (valueIndicatorTextStyle == null)
      valueIndicatorTextStyle = NikuTextStyle()
}
```

