---
layout: ../../../layouts/doc.astro
title: Image
---
Representation of Image


To use this widget, simply import from the of the following:
```dart
import 'package:niku/niku.dart';
import 'package:niku/namespace.dart';
import 'package:niku/widget/widget.dart';
import 'package:niku/widget/Image.dart';
```
## Factory method:

## Cascasde properties:
To use dot cascade, simply use the following syntax:

```dart
NikuImage
  ..image ImageProvider = data
  ..frameBuilder ImageFrameBuilder? = data
```

## Macros:
This widget implement the following macros (shortcut):
- [NikuBuildMacro](/docs/macros/nikuBuild)
- [UseQueryMacro](/docs/macros/useQuery)
- [ColorBlendModeMacro](/docs/macros/colorBlendMode)
- [BoxFitMacro](/docs/macros/boxFit)
- [ImageRepeatMacro](/docs/macros/imageRepeat)

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

## ColorBlendModeMacro
Implement [ColorBlendModeMacro](/docs/macros/colorBlendMode) abstract class

### clear `shortcut`

Equivalent to:
```dart
colorBlendMode = BlendMode.clear
```

### src `shortcut`

Equivalent to:
```dart
colorBlendMode = BlendMode.src
```

### dst `shortcut`

Equivalent to:
```dart
colorBlendMode = BlendMode.dst
```

### srcOver `shortcut`

Equivalent to:
```dart
colorBlendMode = BlendMode.srcOver
```

### dstOver `shortcut`

Equivalent to:
```dart
colorBlendMode = BlendMode.dstOver
```

### srcIn `shortcut`

Equivalent to:
```dart
colorBlendMode = BlendMode.srcIn
```

### dstIn `shortcut`

Equivalent to:
```dart
colorBlendMode = BlendMode.dstIn
```

### srcOut `shortcut`

Equivalent to:
```dart
colorBlendMode = BlendMode.srcOut
```

### dstOut `shortcut`

Equivalent to:
```dart
colorBlendMode = BlendMode.dstOut
```

### srcATop `shortcut`

Equivalent to:
```dart
colorBlendMode = BlendMode.srcATop
```

### dstATop `shortcut`

Equivalent to:
```dart
colorBlendMode = BlendMode.dstATop
```

### xor `shortcut`

Equivalent to:
```dart
colorBlendMode = BlendMode.xor
```

### plus `shortcut`

Equivalent to:
```dart
colorBlendMode = BlendMode.plus
```

### modulate `shortcut`

Equivalent to:
```dart
colorBlendMode = BlendMode.modulate
```

### screen `shortcut`

Equivalent to:
```dart
colorBlendMode = BlendMode.screen
```

### overlay `shortcut`

Equivalent to:
```dart
colorBlendMode = BlendMode.overlay
```

### darken `shortcut`

Equivalent to:
```dart
colorBlendMode = BlendMode.darken
```

### lighten `shortcut`

Equivalent to:
```dart
colorBlendMode = BlendMode.lighten
```

### colorDodge `shortcut`

Equivalent to:
```dart
colorBlendMode = BlendMode.colorDodge
```

### colorBurn `shortcut`

Equivalent to:
```dart
colorBlendMode = BlendMode.colorBurn
```

### hardLight `shortcut`

Equivalent to:
```dart
colorBlendMode = BlendMode.hardLight
```

### softLight `shortcut`

Equivalent to:
```dart
colorBlendMode = BlendMode.softLight
```

### difference `shortcut`

Equivalent to:
```dart
colorBlendMode = BlendMode.difference
```

### exclusion `shortcut`

Equivalent to:
```dart
colorBlendMode = BlendMode.exclusion
```

### multiply `shortcut`

Equivalent to:
```dart
colorBlendMode = BlendMode.multiply
```

### hue `shortcut`

Equivalent to:
```dart
colorBlendMode = BlendMode.hue
```

### saturation `shortcut`

Equivalent to:
```dart
colorBlendMode = BlendMode.saturation
```

### color `shortcut`

Equivalent to:
```dart
colorBlendMode = BlendMode.color
```

### luminosity `shortcut`

Equivalent to:
```dart
colorBlendMode = BlendMode.luminosity
```

## BoxFitMacro
Implement [BoxFitMacro](/docs/macros/boxFit) abstract class

### contain `shortcut`

Equivalent to:
```dart
fit = BoxFit.contain
```

### cover `shortcut`

Equivalent to:
```dart
fit = BoxFit.cover
```

### fill `shortcut`

Equivalent to:
```dart
fit = BoxFit.fill
```

### fitHeight `shortcut`

Equivalent to:
```dart
fit = BoxFit.fitHeight
```

### fitWidth `shortcut`

Equivalent to:
```dart
fit = BoxFit.fitWidth
```

### noFit `shortcut`

Equivalent to:
```dart
fit = BoxFit.none
```

### scaleDown `shortcut`

Equivalent to:
```dart
fit = BoxFit.scaleDown
```

## ImageRepeatMacro
Implement [ImageRepeatMacro](/docs/macros/imageRepeat) abstract class

### repeatNone `shortcut`

Equivalent to:
```dart
repeat = ImageRepeat.noRepeat
```

### repeatX `shortcut`

Equivalent to:
```dart
repeat = ImageRepeat.repeatX
```

### repeatY `shortcut`

Equivalent to:
```dart
repeat = ImageRepeat.repeatY
```

### repeatAll `shortcut`

Equivalent to:
```dart
repeat = ImageRepeat.repeat
```

### repeatXY `shortcut`

Equivalent to:
```dart
repeat = ImageRepeat.repeat
```

