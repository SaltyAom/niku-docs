---
layout: ../../../layouts/doc.astro
title: Row
---
Representation of Row


To use this widget, simply import from the of the following:
```dart
import 'package:niku/niku.dart';
import 'package:niku/namespace.dart';
import 'package:niku/widget/widget.dart';
import 'package:niku/widget/Row.dart';
```

## Cascasde properties:
To use dot cascade, simply use the following syntax:

```dart
NikuRow
  ..children List<Widget> = data
  ..mainAxisAlignment MainAxisAlignment? = data
```

## Macros:
This widget implement the following macros (shortcut):
- [NikuBuildMacro](/docs/macros/nikuBuild)
- [UseQueryMacro](/docs/macros/useQuery)
- [ClipMacro](/docs/macros/clip)
- [CrossAxisAlignmentMacro](/docs/macros/crossAxisAlignment)
- [GapMacro](/docs/macros/gap)
- [MainAxisAlignmentMacro](/docs/macros/mainAxisAlignment)
- [MainAxisSizeMacro](/docs/macros/mainAxisSize)
- [TextBaselineMacro](/docs/macros/textBaseline)
- [TextDirectionMacro](/docs/macros/textDirection)

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

## CrossAxisAlignmentMacro
Implement [CrossAxisAlignmentMacro](/docs/macros/crossAxisAlignment) abstract class

### crossAxis `set`

Arguments:
```dart
(CrossAxisAlignment value) 
```

Equivalent to:
```dart
crossAxisAlignment = value
```

### crossStart `shortcut`

Equivalent to:
```dart
crossAxisAlignment = CrossAxisAlignment.start
```

### crossCenter `shortcut`

Equivalent to:
```dart
crossAxisAlignment = CrossAxisAlignment.center
```

### crossEnd `shortcut`

Equivalent to:
```dart
crossAxisAlignment = CrossAxisAlignment.end
```

### crossBaseline `shortcut`

Equivalent to:
```dart
crossAxisAlignment = CrossAxisAlignment.baseline
```

### crossStretch `shortcut`

Equivalent to:
```dart
crossAxisAlignment = CrossAxisAlignment.stretch
```

### baseline `shortcut`

Equivalent to:
```dart
crossAxisAlignment = CrossAxisAlignment.baseline
```

### stretch `shortcut`

Equivalent to:
```dart
crossAxisAlignment = CrossAxisAlignment.stretch
```

## GapMacro
Implement [GapMacro](/docs/macros/gap) abstract class

### gap `set`

Arguments:
```dart
(double? height) 
```

Equivalent to:
```dart
{
    if (height == null) return childrenWithGap = null;

    childrenWithGap = [...children];

    for (int index = 0; index < children.length; index++)
      if (index != 0)
        childrenWithGap!.insert(
          index * 2,
          SizedBox(height: height),
        );

    childrenWithGap!.insert(
      1,
      SizedBox(width: 1, height: height),
    );
  }
```

## MainAxisAlignmentMacro
Implement [MainAxisAlignmentMacro](/docs/macros/mainAxisAlignment) abstract class

### mainAxis `set`

Arguments:
```dart
(MainAxisAlignment value) 
```

Equivalent to:
```dart
mainAxisAlignment = value
```

### mainStart `shortcut`

Equivalent to:
```dart
mainAxisAlignment = MainAxisAlignment.start
```

### mainCenter `shortcut`

Equivalent to:
```dart
mainAxisAlignment = MainAxisAlignment.center
```

### mainEnd `shortcut`

Equivalent to:
```dart
mainAxisAlignment = MainAxisAlignment.end
```

### mainAround `shortcut`

Equivalent to:
```dart
mainAxisAlignment = MainAxisAlignment.spaceAround
```

### mainBetween `shortcut`

Equivalent to:
```dart
mainAxisAlignment = MainAxisAlignment.spaceBetween
```

### mainEvenly `shortcut`

Equivalent to:
```dart
mainAxisAlignment = MainAxisAlignment.spaceEvenly
```

### spaceAround `shortcut`

Equivalent to:
```dart
mainAxisAlignment = MainAxisAlignment.spaceAround
```

### spaceBetween `shortcut`

Equivalent to:
```dart
mainAxisAlignment = MainAxisAlignment.spaceBetween
```

### spaceEvenly `shortcut`

Equivalent to:
```dart
mainAxisAlignment = MainAxisAlignment.spaceEvenly
```

### around `shortcut`

Equivalent to:
```dart
mainAxisAlignment = MainAxisAlignment.spaceAround
```

### between `shortcut`

Equivalent to:
```dart
mainAxisAlignment = MainAxisAlignment.spaceBetween
```

### evenly `shortcut`

Equivalent to:
```dart
mainAxisAlignment = MainAxisAlignment.spaceEvenly
```

## MainAxisSizeMacro
Implement [MainAxisSizeMacro](/docs/macros/mainAxisSize) abstract class

### min `shortcut`

Equivalent to:
```dart
mainAxisSize = MainAxisSize.min
```

### max `shortcut`

Equivalent to:
```dart
mainAxisSize = MainAxisSize.max
```

## TextBaselineMacro
Implement [TextBaselineMacro](/docs/macros/textBaseline) abstract class

### alphabetic `shortcut`

Equivalent to:
```dart
textBaseline = TextBaseline.alphabetic
```

### ideographic `shortcut`

Equivalent to:
```dart
textBaseline = TextBaseline.ideographic
```

## TextDirectionMacro
Implement [TextDirectionMacro](/docs/macros/textDirection) abstract class

### ltr `shortcut`

Equivalent to:
```dart
textDirection = TextDirection.ltr
```

### rtl `shortcut`

Equivalent to:
```dart
textDirection = TextDirection.rtl
```

