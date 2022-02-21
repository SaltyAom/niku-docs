---
layout: ../../../layouts/doc.astro
title: InsetPaddingMacro
---
Reusable shortcuts abstract class used in:


To use this macro, simply import from one of the following:
```dart
import 'package:niku/niku.dart';
import 'package:niku/macros/macros.dart';
import 'package:niku/macros/InsetPaddingMacro.dart';
```
## InsetPaddingMacro

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

### insetPt `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => insetPadding!.top = padding)
```

### insetPl `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => insetPadding!.left = padding)
```

### insetPb `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => insetPadding!.bottom = padding)
```

### insetPr `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => insetPadding!.right = padding)
```

### insetPx `set`

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

### insetPy `set`

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

### insetP `set`

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

