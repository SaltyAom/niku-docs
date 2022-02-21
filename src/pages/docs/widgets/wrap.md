---
layout: ../../../layouts/doc.astro
title: Wrap
---
Representation of Wrap


To use this widget, simply import from the of the following:
```dart
import 'package:niku/niku.dart';
import 'package:niku/namespace.dart';
import 'package:niku/widget/widget.dart';
import 'package:niku/widget/wrap.dart';
```

## Cascasde properties:
To use dot cascade, simply use the following syntax:

```dart
NikuWrap
  ..chidren = data
  ..direction = data
```

## Macros:
This widget implement the following macros (shortcut):
- [AxisMacro](/docs/macros/axis)
- [ClipMacro](/docs/macros/clip)
- [RunAlignmentMacro](/docs/macros/runAlignment)
- [WrapAlignmentMacro](/docs/macros/wrapAlignment)

## AxisMacro
Implement [AxisMacro](/docs/macros/axis) abstract class

### vertical `shortcut`

Equivalent to:
```dart
direction = Axis.vertical
```

### horizontal `shortcut`

Equivalent to:
```dart
direction = Axis.horizontal
```

### row `shortcut`

Equivalent to:
```dart
direction = Axis.vertical
```

### col `shortcut`

Equivalent to:
```dart
direction = Axis.vertical
```

### column `shortcut`

Equivalent to:
```dart
direction = Axis.vertical
```

## ClipMacro
Implement [ClipMacro](/docs/macros/clip) abstract class

### noClip `shortcut`

Equivalent to:
```dart
clip = Clip.none
```

### hardEdge `shortcut`

Equivalent to:
```dart
clip = Clip.hardEdge
```

### antiAlias `shortcut`

Equivalent to:
```dart
clip = Clip.antiAlias
```

### antiAliasWithSaveLayer `shortcut`

Equivalent to:
```dart
clip = Clip.antiAliasWithSaveLayer
```

## RunAlignmentMacro
Implement [RunAlignmentMacro](/docs/macros/runAlignment) abstract class

### runStart `shortcut`

Equivalent to:
```dart
runAlignment = WrapAlignment.start
```

### runCenter `shortcut`

Equivalent to:
```dart
runAlignment = WrapAlignment.center
```

### runEnd `shortcut`

Equivalent to:
```dart
runAlignment = WrapAlignment.end
```

### runAround `shortcut`

Equivalent to:
```dart
runAlignment = WrapAlignment.spaceAround
```

### runBetween `shortcut`

Equivalent to:
```dart
runAlignment = WrapAlignment.spaceBetween
```

### runEvenly `shortcut`

Equivalent to:
```dart
runAlignment = WrapAlignment.spaceEvenly
```

### spaceAround `shortcut`

Equivalent to:
```dart
runAlignment = WrapAlignment.spaceAround
```

### spaceBetween `shortcut`

Equivalent to:
```dart
runAlignment = WrapAlignment.spaceBetween
```

### spaceEvenly `shortcut`

Equivalent to:
```dart
runAlignment = WrapAlignment.spaceEvenly
```

### around `shortcut`

Equivalent to:
```dart
runAlignment = WrapAlignment.spaceAround
```

### between `shortcut`

Equivalent to:
```dart
runAlignment = WrapAlignment.spaceBetween
```

### evenly `shortcut`

Equivalent to:
```dart
runAlignment = WrapAlignment.spaceEvenly
```

## WrapAlignmentMacro
Implement [WrapAlignmentMacro](/docs/macros/wrapAlignment) abstract class

### wrapStart `shortcut`

Equivalent to:
```dart
alignment = WrapAlignment.start
```

### wrapCenter `shortcut`

Equivalent to:
```dart
alignment = WrapAlignment.center
```

### wrapEnd `shortcut`

Equivalent to:
```dart
alignment = WrapAlignment.end
```

### wrapAround `shortcut`

Equivalent to:
```dart
alignment = WrapAlignment.spaceAround
```

### wrapBetween `shortcut`

Equivalent to:
```dart
alignment = WrapAlignment.spaceBetween
```

### wrapEvenly `shortcut`

Equivalent to:
```dart
alignment = WrapAlignment.spaceEvenly
```

### spaceAround `shortcut`

Equivalent to:
```dart
alignment = WrapAlignment.spaceAround
```

### spaceBetween `shortcut`

Equivalent to:
```dart
alignment = WrapAlignment.spaceBetween
```

### spaceEvenly `shortcut`

Equivalent to:
```dart
alignment = WrapAlignment.spaceEvenly
```

### around `shortcut`

Equivalent to:
```dart
alignment = WrapAlignment.spaceAround
```

### between `shortcut`

Equivalent to:
```dart
alignment = WrapAlignment.spaceBetween
```

### evenly `shortcut`

Equivalent to:
```dart
alignment = WrapAlignment.spaceEvenly
```

