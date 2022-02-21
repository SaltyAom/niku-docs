---
layout: ../../../layouts/doc.astro
title: ApplySturtStyleMacro
---
Reusable shortcuts abstract class used in:


To use this macro, simply import from one of the following:
```dart
import 'package:niku/niku.dart';
import 'package:niku/macros/macros.dart';
import 'package:niku/macros/ApplySturtStyleMacro.dart';
```
## ApplySturtStyleMacro

### applySturtStyle `set`

Arguments:
```dart
(NikuStrutStyle v) 
```

Equivalent to:
```dart
{
    if (strutStyle == null) strutStyle = NikuStrutStyle();

    strutStyle?.apply = v;
  }
```

### useSturtStyle `hook`

Equivalent to:
```dart
{
    if (strutStyle == null) strutStyle = NikuStrutStyle()
}
```

