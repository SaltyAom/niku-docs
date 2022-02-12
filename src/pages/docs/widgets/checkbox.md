---
layout: ../../../layouts/doc.astro
title: Checkbox
---
Representation of Checkbox


To use this widget, simply import from the of the following:
```dart
import 'package:niku/niku.dart';
import 'package:niku/namespace.dart';
import 'package:niku/widget/widget.dart';
import 'package:niku/widget/Checkbox.dart';
```

## Cascasde properties:
To use dot cascade, simply use the following syntax:

```dart
NikuCheckbox
  ..value bool? = data
  ..onChanged ValueChanged<bool?>? = data
```

## Macros:
This widget implement the following macros (shortcut):
- [NikuBuildMacro](/docs/macros/nikuBuild)
- [UseQueryMacro](/docs/macros/useQuery)

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

