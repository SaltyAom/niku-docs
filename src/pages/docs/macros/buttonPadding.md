---
layout: ../../../layouts/doc.astro
title: ButtonPaddingMacro
---
Reusable shortcuts abstract class used in:


To use this macro, simply import from one of the following:
```dart
import 'package:niku/niku.dart';
import 'package:niku/macros/macros.dart';
import 'package:niku/macros/ButtonPaddingMacro.dart';
```
## ButtonPaddingMacro

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

### buttonPt `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => buttonPadding!.top = padding)
```

### buttonPl `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => buttonPadding!.left = padding)
```

### buttonPb `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => buttonPadding!.bottom = padding)
```

### buttonPr `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => buttonPadding!.right = padding)
```

### buttonPx `set`

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

### buttonPy `set`

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

### buttonP `set`

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

