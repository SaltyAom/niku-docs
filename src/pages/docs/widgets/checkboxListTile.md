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
import 'package:niku/widget/checkboxListTile.dart';
```

## Cascasde properties:
To use dot cascade, simply use the following syntax:

```dart
NikuCheckboxListTile
  ..value = data
  ..onChanged = data
```

## Macros:
This widget implement the following macros (shortcut):
- [ContentPaddingMacro](/docs/macros/contentPadding)
- [ListTileControlAffinityMacro](/docs/macros/listTileControlAffinity)

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

### contentPt `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => contentPadding!.top = padding)
```

### contentPl `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => contentPadding!.left = padding)
```

### contentPb `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => contentPadding!.bottom = padding)
```

### contentPr `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => contentPadding!.right = padding)
```

### contentPx `set`

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

### contentPy `set`

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

### contentP `set`

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

