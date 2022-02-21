---
layout: ../../../layouts/doc.astro
title: PaddingMacro
---
Reusable shortcuts abstract class used in:
- [PopupMenuButton](/docs/widgets/popupMenuButton)


To use this macro, simply import from one of the following:
```dart
import 'package:niku/niku.dart';
import 'package:niku/macros/macros.dart';
import 'package:niku/macros/PaddingMacro.dart';
```
## PaddingMacro

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

