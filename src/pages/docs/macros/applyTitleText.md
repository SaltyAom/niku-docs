---
layout: ../../../layouts/doc.astro
title: ApplyTitleTextMacro
---
Reusable shortcuts abstract class used in:
- [Alert](/docs/widgets/alert)


To use this macro, simply import from one of the following:
```dart
import 'package:niku/niku.dart';
import 'package:niku/macros/macros.dart';
import 'package:niku/macros/ApplyTitleTextMacro.dart';
```
## ApplyTitleTextMacro

### applyStyle `set`

Arguments:
```dart
(NikuTextStyle v) 
```

Equivalent to:
```dart
{
    if (titleTextStyle == null) titleTextStyle = NikuTextStyle();

    titleTextStyle?.apply = v;
  }
```

### useStyle `hook`

Equivalent to:
```dart
{
    if (titleTextStyle == null) titleTextStyle = NikuTextStyle()
}
```

