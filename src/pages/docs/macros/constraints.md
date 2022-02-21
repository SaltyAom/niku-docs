---
layout: ../../../layouts/doc.astro
title: ConstraintsMacro
---
Reusable shortcuts abstract class used in:


To use this macro, simply import from one of the following:
```dart
import 'package:niku/niku.dart';
import 'package:niku/macros/macros.dart';
import 'package:niku/macros/ConstraintsMacro.dart';
```
## ConstraintsMacro

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

