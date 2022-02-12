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
import 'package:niku/widget/Wrap.dart';
```

## Cascasde properties:
To use dot cascade, simply use the following syntax:

```dart
NikuWrap
  ..chidren List<Widget> = data
  ..direction Axis? = data
```

## Macros:
This widget implement the following macros (shortcut):
- [NikuBuildMacro](/docs/macros/nikuBuild)
- [UseQueryMacro](/docs/macros/useQuery)
- [AxisMacro](/docs/macros/axis)
- [ClipMacro](/docs/macros/clip)
- [RunAlignmentMacro](/docs/macros/runAlignment)
- [WrapAlignmentMacro](/docs/macros/wrapAlignment)
- [WrapCrossAxisMacro](/docs/macros/wrapCrossAxis)

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

## AxisMacro
Implement [AxisMacro](/docs/macros/axis) abstract class

### vertical `shortcut`

Equivalent to:
```dart
axis = Axis.vertical
```

### horizontal `shortcut`

Equivalent to:
```dart
axis = Axis.horizontal
```

### row `shortcut`

Equivalent to:
```dart
axis = Axis.vertical
```

### col `shortcut`

Equivalent to:
```dart
axis = Axis.vertical
```

### column `shortcut`

Equivalent to:
```dart
axis = Axis.vertical
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

## WrapCrossAxisMacro
Implement [WrapCrossAxisMacro](/docs/macros/wrapCrossAxis) abstract class

### wrapCross `set`

Arguments:
```dart
(WrapCrossAlignment value) 
```

Equivalent to:
```dart
crossAxisAlignment = value
```

### crossStart `shortcut`

Equivalent to:
```dart
crossAxisAlignment = WrapCrossAlignment.start
```

### crossCenter `shortcut`

Equivalent to:
```dart
crossAxisAlignment = WrapCrossAlignment.center
```

### crossEnd `shortcut`

Equivalent to:
```dart
crossAxisAlignment = WrapCrossAlignment.end
```

