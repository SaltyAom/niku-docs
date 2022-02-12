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
import 'package:niku/widget/Alert.dart';
```
## Factory method:

## Cascasde properties:
To use dot cascade, simply use the following syntax:

```dart
NikuAlert
  ..title Widget? = data
  ..titlePadding NikuEdgeInsets? = data
```

## Macros:
This widget implement the following macros (shortcut):
- [NikuBuildMacro](/docs/macros/nikuBuild)
- [UseQueryMacro](/docs/macros/useQuery)
- [ActionPaddingMacro](/docs/macros/actionPadding)
- [ApplyTitleTextMacro](/docs/macros/applyTitleText)
- [ApplyContentTextMacro](/docs/macros/applyContentText)
- [ButtonPaddingMacro](/docs/macros/buttonPadding)
- [ClipMacro](/docs/macros/clip)
- [ContentPaddingMacro](/docs/macros/contentPadding)
- [InsetPaddingMacro](/docs/macros/insetPadding)

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

## ActionPaddingMacro
Implement [ActionPaddingMacro](/docs/macros/actionPadding) abstract class

### pt `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => actionPadding!.top = padding)
```

### pl `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => actionPadding!.left = padding)
```

### pb `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => actionPadding!.bottom = padding)
```

### pr `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => actionPadding!.right = padding)
```

### px `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
{
    _initialize(() {
      actionPadding!.left = padding;
      actionPadding!.right = padding;
    });
  }
```

### py `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
{
    _initialize(() {
      actionPadding!.top = padding;
      actionPadding!.bottom = padding;
    });
  }
```

### p `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
{
    _initialize(() {
      actionPadding!.top = padding;
      actionPadding!.bottom = padding;
      actionPadding!.left = padding;
      actionPadding!.right = padding;
    });
  }
```

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

## ButtonPaddingMacro
Implement [ButtonPaddingMacro](/docs/macros/buttonPadding) abstract class

### pt `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => buttonPadding!.top = padding)
```

### pl `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => buttonPadding!.left = padding)
```

### pb `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => buttonPadding!.bottom = padding)
```

### pr `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => buttonPadding!.right = padding)
```

### px `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
{
    _initialize(() {
      buttonPadding!.left = padding;
      buttonPadding!.right = padding;
    });
  }
```

### py `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
{
    _initialize(() {
      buttonPadding!.top = padding;
      buttonPadding!.bottom = padding;
    });
  }
```

### p `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
{
    _initialize(() {
      buttonPadding!.top = padding;
      buttonPadding!.bottom = padding;
      buttonPadding!.left = padding;
      buttonPadding!.right = padding;
    });
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

## ContentPaddingMacro
Implement [ContentPaddingMacro](/docs/macros/contentPadding) abstract class

### pt `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => contentPadding!.top = padding)
```

### pl `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => contentPadding!.left = padding)
```

### pb `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => contentPadding!.bottom = padding)
```

### pr `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => contentPadding!.right = padding)
```

### px `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
{
    _initialize(() {
      contentPadding!.left = padding;
      contentPadding!.right = padding;
    });
  }
```

### py `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
{
    _initialize(() {
      contentPadding!.top = padding;
      contentPadding!.bottom = padding;
    });
  }
```

### p `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
{
    _initialize(() {
      contentPadding!.top = padding;
      contentPadding!.bottom = padding;
      contentPadding!.left = padding;
      contentPadding!.right = padding;
    });
  }
```

## InsetPaddingMacro
Implement [InsetPaddingMacro](/docs/macros/insetPadding) abstract class

### pt `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => insetPadding!.top = padding)
```

### pl `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => insetPadding!.left = padding)
```

### pb `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => insetPadding!.bottom = padding)
```

### pr `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => insetPadding!.right = padding)
```

### px `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
{
    _initialize(() {
      insetPadding!.left = padding;
      insetPadding!.right = padding;
    });
  }
```

### py `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
{
    _initialize(() {
      insetPadding!.top = padding;
      insetPadding!.bottom = padding;
    });
  }
```

### p `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
{
    _initialize(() {
      insetPadding!.top = padding;
      insetPadding!.bottom = padding;
      insetPadding!.left = padding;
      insetPadding!.right = padding;
    });
  }
```

