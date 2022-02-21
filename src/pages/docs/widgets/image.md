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
import 'package:niku/widget/image.dart';
```
## Factory method:
- network
- cache
- file
- asset
- memory


## Cascasde properties:
To use dot cascade, simply use the following syntax:

```dart
NikuImage
  ..image = data
  ..frameBuilder = data
```

## Macros:
This widget implement the following macros (shortcut):
- [BoxFitMacro](/docs/macros/boxFit)
- [ImageRepeatMacro](/docs/macros/imageRepeat)
- [WidthHeightMacro](/docs/macros/widthHeight)

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

## WidthHeightMacro
Implement [WidthHeightMacro](/docs/macros/widthHeight) abstract class

### w `set`

Arguments:
```dart
(double w) 
```

Equivalent to:
```dart
width = w
```

### h `set`

Arguments:
```dart
(double h) 
```

Equivalent to:
```dart
height = h
```

