---
layout: ../../../layouts/doc.astro
title: ApplyButtonStyleMacro
---
Reusable shortcuts abstract class used in:
- [Button](/docs/widgets/button)


To use this macro, simply import from one of the following:
```dart
import 'package:niku/niku.dart';
import 'package:niku/macros/macros.dart';
import 'package:niku/macros/ApplyButtonStyleMacro.dart';
```
## ApplyButtonStyleMacro

### applyButtonStyle `set`

Arguments:
```dart
(NikuButtonStyle v) 
```

Equivalent to:
```dart
{
    if (style == null) style = NikuButtonStyle();

    style?.apply = v;
  }
```

### useButtonStyle `hook`

Equivalent to:
```dart
{
    if (style == null) style = NikuButtonStyle()
}
```

