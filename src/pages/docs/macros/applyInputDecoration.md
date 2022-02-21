---
layout: ../../../layouts/doc.astro
title: ApplyInputDecorationMacro
---
Reusable shortcuts abstract class used in:


To use this macro, simply import from one of the following:
```dart
import 'package:niku/niku.dart';
import 'package:niku/macros/macros.dart';
import 'package:niku/macros/ApplyInputDecorationMacro.dart';
```
## ApplyInputDecorationMacro

### applyDecoration `set`

Arguments:
```dart
(NikuInputDecoration v) 
```

Equivalent to:
```dart
{
    if (decoration == null) decoration = NikuInputDecoration();

    decoration?.apply = v;
  }
```

### useDecoration `hook`

Equivalent to:
```dart
{
    if (decoration == null) decoration = NikuInputDecoration()
}
```

