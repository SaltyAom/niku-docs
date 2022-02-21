---
layout: ../../../layouts/doc.astro
title: Alert
---
Representation of Alert


To use this widget, simply import from the of the following:
```dart
import 'package:niku/niku.dart';
import 'package:niku/namespace.dart';
import 'package:niku/widget/widget.dart';
import 'package:niku/widget/alert.dart';
```
## Factory method:
- adaptive
- cupertino


## Cascasde properties:
To use dot cascade, simply use the following syntax:

```dart
NikuAlert
  ..title = data
  ..titlePadding = data
```

## Macros:
This widget implement the following macros (shortcut):
- [ApplyTitleTextMacro](/docs/macros/applyTitleText)
- [ApplyContentTextMacro](/docs/macros/applyContentText)
- [ClipMacro](/docs/macros/clip)

## ApplyTitleTextMacro
Implement [ApplyTitleTextMacro](/docs/macros/applyTitleText) abstract class

### applyStyle `set`

Arguments:
```dart
(NikuTextStyle v) 
```

Equivalent to:
```dart
{
    if (titleTextStyle == null) titleTextStyle = NikuTextStyle();

    titleTextStyle?.apply = v;
  }
```

### useStyle `hook`

Equivalent to:
```dart
{
    if (titleTextStyle == null) titleTextStyle = NikuTextStyle()
}
```

## ApplyContentTextMacro
Implement [ApplyContentTextMacro](/docs/macros/applyContentText) abstract class

### applyStyle `set`

Arguments:
```dart
(NikuTextStyle v) 
```

Equivalent to:
```dart
{
    if (contentTextStyle == null) contentTextStyle = NikuTextStyle();

    contentTextStyle?.apply = v;
  }
```

### useStyle `hook`

Equivalent to:
```dart
{
    if (contentTextStyle == null) contentTextStyle = NikuTextStyle()
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

