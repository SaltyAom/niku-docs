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
import 'package:niku/widget/dropdownButton.dart';
```

## Cascasde properties:
To use dot cascade, simply use the following syntax:

```dart
NikuDropdownButton
  ..items = data
  ..itemsValue = data
```

## Macros:
This widget implement the following macros (shortcut):
- [ApplyTextMacro](/docs/macros/applyText)
- [AlignmentDirectionalMacro](/docs/macros/alignmentDirectional)

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

