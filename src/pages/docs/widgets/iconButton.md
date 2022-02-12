---
layout: ../../../layouts/doc.astro
title: IconButton
---
Representation of IconButton


To use this widget, simply import from the of the following:
```dart
import 'package:niku/niku.dart';
import 'package:niku/namespace.dart';
import 'package:niku/widget/widget.dart';
import 'package:niku/widget/IconButton.dart';
```
## Factory method:

## Cascasde properties:
To use dot cascade, simply use the following syntax:

```dart
NikuIconButton
  ..child Widget? = data
  ..Function void = data
```

## Macros:
This widget implement the following macros (shortcut):
- [NikuBuildMacro](/docs/macros/nikuBuild)
- [UseQueryMacro](/docs/macros/useQuery)
- [AlignmentDirectionalMacro](/docs/macros/alignmentDirectional)
- [ConstraintsMacro](/docs/macros/constraints)
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

## AlignmentDirectionalMacro
Implement [AlignmentDirectionalMacro](/docs/macros/alignmentDirectional) abstract class

### topStart `shortcut`

Equivalent to:
```dart
alignment = AlignmentDirectional.topStart
```

### topCenter `shortcut`

Equivalent to:
```dart
alignment = AlignmentDirectional.topCenter
```

### topEnd `shortcut`

Equivalent to:
```dart
alignment = AlignmentDirectional.topEnd
```

### centerStart `shortcut`

Equivalent to:
```dart
alignment = AlignmentDirectional.centerStart
```

### center `shortcut`

Equivalent to:
```dart
alignment = AlignmentDirectional.center
```

### centerEnd `shortcut`

Equivalent to:
```dart
alignment = AlignmentDirectional.centerEnd
```

### bottomStart `shortcut`

Equivalent to:
```dart
alignment = AlignmentDirectional.bottomStart
```

### bottomCenter `shortcut`

Equivalent to:
```dart
alignment = AlignmentDirectional.bottomCenter
```

### bottomEnd `shortcut`

Equivalent to:
```dart
alignment = AlignmentDirectional.bottomEnd
```

## ConstraintsMacro
Implement [ConstraintsMacro](/docs/macros/constraints) abstract class

### fullWidth `shortcut`

Equivalent to:
```dart
{
    minWidth = double.infinity;
    maxWidth = double.infinity;
  }
```

### fullHeight `shortcut`

Equivalent to:
```dart
{
    maxHeight = double.infinity;
    maxHeight = double.infinity;
  }
```

### fullSize `shortcut`

Equivalent to:
```dart
{
    minWidth = double.infinity;
    maxWidth = double.infinity;
  }
```

### minSize `set`

Arguments:
```dart
(List<double> list) 
```

Equivalent to:
```dart
{
    minWidth = list[0];
    minHeight = list[1];
  }
```

### maxSize `set`

Arguments:
```dart
(List<double> list) 
```

Equivalent to:
```dart
{
    maxWidth = list[0];
    maxHeight = list[1];
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

