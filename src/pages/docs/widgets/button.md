---
layout: ../../../layouts/doc.astro
title: Button
---
Representation of Button


To use this widget, simply import from the of the following:
```dart
import 'package:niku/niku.dart';
import 'package:niku/namespace.dart';
import 'package:niku/widget/widget.dart';
import 'package:niku/widget/button.dart';
```
## Factory method:
- elevated
- outlined
- icon
- elevatedIcon
- outlinedIcon


## Cascasde properties:
To use dot cascade, simply use the following syntax:

```dart
NikuButton
  ..child = data
  ..icon = data
```

## Macros:
This widget implement the following macros (shortcut):
- [ApplyButtonStyleMacro](/docs/macros/applyButtonStyle)
- [ClipMacro](/docs/macros/clip)

## ApplyButtonStyleMacro
Implement [ApplyButtonStyleMacro](/docs/macros/applyButtonStyle) abstract class

### applyButtonStyle `set`

Arguments:
```dart
(NikuButtonStyle v) 
```

Equivalent to:
```dart
{
    if (style == null) style = NikuButtonStyle();

    style?.apply = v;
  }
```

### useButtonStyle `hook`

Equivalent to:
```dart
{
    if (style == null) style = NikuButtonStyle()
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

