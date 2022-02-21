---
layout: ../../../layouts/doc.astro
title: ActionPaddingMacro
---
Reusable shortcuts abstract class used in:


To use this macro, simply import from one of the following:
```dart
import 'package:niku/niku.dart';
import 'package:niku/macros/macros.dart';
import 'package:niku/macros/ActionPaddingMacro.dart';
```
## ActionPaddingMacro

### pt `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => actionPadding!.top = padding)
```

### pl `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => actionPadding!.left = padding)
```

### pb `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => actionPadding!.bottom = padding)
```

### pr `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => actionPadding!.right = padding)
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
      actionPadding!.left = padding;
      actionPadding!.right = padding;
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
      actionPadding!.top = padding;
      actionPadding!.bottom = padding;
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
      actionPadding!.top = padding;
      actionPadding!.bottom = padding;
      actionPadding!.left = padding;
      actionPadding!.right = padding;
    });
  }
```

### actionPt `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => actionPadding!.top = padding)
```

### actionPl `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => actionPadding!.left = padding)
```

### actionPb `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => actionPadding!.bottom = padding)
```

### actionPr `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => actionPadding!.right = padding)
```

### actionPx `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
{
    _initialize(() {
      actionPadding!.left = padding;
      actionPadding!.right = padding;
    });
  }
```

### actionPy `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
{
    _initialize(() {
      actionPadding!.top = padding;
      actionPadding!.bottom = padding;
    });
  }
```

### actionP `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
{
    _initialize(() {
      actionPadding!.top = padding;
      actionPadding!.bottom = padding;
      actionPadding!.left = padding;
      actionPadding!.right = padding;
    });
  }
```

