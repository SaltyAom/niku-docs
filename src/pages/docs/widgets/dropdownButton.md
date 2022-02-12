---
layout: ../../../layouts/doc.astro
title: DropdownButton
---
Representation of DropdownButton


To use this widget, simply import from the of the following:
```dart
import 'package:niku/niku.dart';
import 'package:niku/namespace.dart';
import 'package:niku/widget/widget.dart';
import 'package:niku/widget/DropdownButton.dart';
```

## Cascasde properties:
To use dot cascade, simply use the following syntax:

```dart
NikuDropdownButton
  ..items List<DropdownMenuItem<T>>? = data
  ..itemsValue List<T>? = data
```

## Macros:
This widget implement the following macros (shortcut):
- [NikuBuildMacro](/docs/macros/nikuBuild)
- [UseQueryMacro](/docs/macros/useQuery)
- [ApplyTextMacro](/docs/macros/applyText)
- [AlignmentDirectionalMacro](/docs/macros/alignmentDirectional)

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

## ApplyTextMacro
Implement [ApplyTextMacro](/docs/macros/applyText) abstract class

### applyTextStyle `set`

Arguments:
```dart
(NikuTextStyle v) 
```

Equivalent to:
```dart
{
    if (style == null) style = NikuTextStyle();

    style?.apply = v;
  }
```

### useTextStyle `hook`

Equivalent to:
```dart
{
    if (style == null) style = NikuTextStyle()
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

