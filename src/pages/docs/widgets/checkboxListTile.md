---
layout: ../../../layouts/doc.astro
title: CheckboxListTile
---
Representation of CheckboxListTile


To use this widget, simply import from the of the following:
```dart
import 'package:niku/niku.dart';
import 'package:niku/namespace.dart';
import 'package:niku/widget/widget.dart';
import 'package:niku/widget/CheckboxListTile.dart';
```

## Cascasde properties:
To use dot cascade, simply use the following syntax:

```dart
NikuCheckboxListTile
  ..value bool? = data
  ..onChanged ValueChanged<bool?>? = data
```

## Macros:
This widget implement the following macros (shortcut):
- [NikuBuildMacro](/docs/macros/nikuBuild)
- [UseQueryMacro](/docs/macros/useQuery)
- [ContentPaddingMacro](/docs/macros/contentPadding)
- [ListTileControlAffinityMacro](/docs/macros/listTileControlAffinity)

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

## ListTileControlAffinityMacro
Implement [ListTileControlAffinityMacro](/docs/macros/listTileControlAffinity) abstract class

### leading `shortcut`

Equivalent to:
```dart
controlAffinity = ListTileControlAffinity.leading
```

### platform `shortcut`

Equivalent to:
```dart
controlAffinity = ListTileControlAffinity.platform
```

### trailing `shortcut`

Equivalent to:
```dart
controlAffinity = ListTileControlAffinity.trailing
```

