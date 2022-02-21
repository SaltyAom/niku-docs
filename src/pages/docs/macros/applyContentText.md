---
layout: ../../../layouts/doc.astro
title: ApplyContentTextMacro
---
Reusable shortcuts abstract class used in:


To use this macro, simply import from one of the following:
```dart
import 'package:niku/niku.dart';
import 'package:niku/macros/macros.dart';
import 'package:niku/macros/ApplyContentTextMacro.dart';
```
## ApplyContentTextMacro

### applyStyle `set`

Arguments:
```dart
(NikuTextStyle v) 
```

Equivalent to:
```dart
{
    if (contentTextStyle == null) contentTextStyle = NikuTextStyle();

    contentTextStyle?.apply = v;
  }
```

### useStyle `hook`

Equivalent to:
```dart
{
    if (contentTextStyle == null) contentTextStyle = NikuTextStyle()
}
```

