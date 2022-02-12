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
import 'package:niku/widget/Slider.dart';
```
## Factory method:

## Cascasde properties:
To use dot cascade, simply use the following syntax:

```dart
NikuSlider
  ..data double = data
  ..sliderType Type? = data
```

## Macros:
This widget implement the following macros (shortcut):
- [NikuBuildMacro](/docs/macros/nikuBuild)
- [UseQueryMacro](/docs/macros/useQuery)
- [ApplyTextMacro](/docs/macros/applyText)
- [ApplyValueIndicatorTextStyleMacro](/docs/macros/applyValueIndicatorTextStyle)

## NikuBuildMacro
Implement [NikuBuildMacro](/docs/macros/nikuBuild) abstract class

### useNiku `shortcut`

Arguments:
```dart
(Widget Function(Niku) cb) 
```

Equivalent to:
```dart
_parent = cb(Niku(widget))
```

### useParent `shortcut`

Arguments:
```dart
(Widget Function(Niku) cb) 
```

Equivalent to:
```dart
_parent = cb(Niku(widget))
```

### on `set`

Arguments:
```dart
(List<dynamic> dependencies) 
```

Equivalent to:
```dart
_parent = Niku(NikuOn(() => widget, dependencies))
```

### on `shortcut`

Equivalent to:
```dart
{
    _parent = Niku(NikuOn(() => widget, []));

    return [];
  }
```

### freezed `shortcut`

Equivalent to:
```dart
_parent = Niku(NikuOn(() => widget, []))
```

### get `shortcut`

Arguments:
```dart
 widget 
```

Equivalent to:
```dart
SizedBox.shrink()
```

## UseQueryMacro
Implement [UseQueryMacro](/docs/macros/useQuery) abstract class

### apply `set`

Arguments:
```dart
(T? v) 
```

Equivalent to:
```dart
{}
```

### copied `shortcut`

Equivalent to:
```dart
{
    return SizedBox.shrink() as T;
  }
```

### useScreen `hook`

Equivalent to:
```dart
{
    apply = builder(copied, MediaQuery.of(context).size)
}
```

### useQuery `hook`

Equivalent to:
```dart
{
    final width = MediaQuery.of(context).size.width
}
```

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

