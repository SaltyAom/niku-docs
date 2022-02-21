---
layout: ../../../layouts/doc.astro
title: ContentPaddingMacro
---
Reusable shortcuts abstract class used in:
- [CheckboxListTile](/docs/widgets/checkboxListTile)


To use this macro, simply import from one of the following:
```dart
import 'package:niku/niku.dart';
import 'package:niku/macros/macros.dart';
import 'package:niku/macros/ContentPaddingMacro.dart';
```
## ContentPaddingMacro

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

