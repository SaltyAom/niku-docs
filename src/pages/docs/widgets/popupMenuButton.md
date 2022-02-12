---
layout: ../../../layouts/doc.astro
title: PopupMenuButton
---
Representation of PopupMenuButton


To use this widget, simply import from the of the following:
```dart
import 'package:niku/niku.dart';
import 'package:niku/namespace.dart';
import 'package:niku/widget/widget.dart';
import 'package:niku/widget/PopupMenuButton.dart';
```

## Cascasde properties:
To use dot cascade, simply use the following syntax:

```dart
NikuPopupMenuButton
  ..undefined NikuPopupMenuButton = data
  ..undefined NikuPopupMenuButton = data
```

## Macros:
This widget implement the following macros (shortcut):
- [NikuBuildMacro](/docs/macros/nikuBuild)
- [UseQueryMacro](/docs/macros/useQuery)
- [PaddingMacro](/docs/macros/padding)

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

## PaddingMacro
Implement [PaddingMacro](/docs/macros/padding) abstract class

### pt `set`

Arguments:
```dart
(double p) 
```

Equivalent to:
```dart
_initialize(() => padding!.top = p)
```

### pl `set`

Arguments:
```dart
(double p) 
```

Equivalent to:
```dart
_initialize(() => padding!.left = p)
```

### pb `set`

Arguments:
```dart
(double p) 
```

Equivalent to:
```dart
_initialize(() => padding!.bottom = p)
```

### pr `set`

Arguments:
```dart
(double p) 
```

Equivalent to:
```dart
_initialize(() => padding!.right = p)
```

### px `set`

Arguments:
```dart
(double p) 
```

Equivalent to:
```dart
{
    _initialize(() {
      padding!.left = p;
      padding!.right = p;
    });
  }
```

### py `set`

Arguments:
```dart
(double p) 
```

Equivalent to:
```dart
{
    _initialize(() {
      padding!.top = p;
      padding!.bottom = p;
    });
  }
```

### p `set`

Arguments:
```dart
(double p) 
```

Equivalent to:
```dart
{
    _initialize(() {
      padding!.top = p;
      padding!.bottom = p;
      padding!.left = p;
      padding!.right = p;
    });
  }
```

