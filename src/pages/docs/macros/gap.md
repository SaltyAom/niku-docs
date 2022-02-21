---
layout: ../../../layouts/doc.astro
title: GapMacro
---
Reusable shortcuts abstract class used in:


To use this macro, simply import from one of the following:
```dart
import 'package:niku/niku.dart';
import 'package:niku/macros/macros.dart';
import 'package:niku/macros/GapMacro.dart';
```
## GapMacro

### gap `set`

Arguments:
```dart
(double? height) 
```

Equivalent to:
```dart
{
    if (height == null) return childrenWithGap = null;

    if (children.length == 0) return;

    childrenWithGap = [...children];

    for (int index = 1; index < children.length - 1; index++)
      childrenWithGap!.insert(
        index * 2,
        SizedBox(height: height),
      );

    childrenWithGap!.insert(
      1,
      SizedBox(height: height),
    );
  }
```

