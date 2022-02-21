---
layout: ../../../layouts/doc.astro
title: ApplyValueIndicatorTextStyleMacro
---
Reusable shortcuts abstract class used in:


To use this macro, simply import from one of the following:
```dart
import 'package:niku/niku.dart';
import 'package:niku/macros/macros.dart';
import 'package:niku/macros/ApplyValueIndicatorTextStyleMacro.dart';
```
## ApplyValueIndicatorTextStyleMacro

### applyTextStyle `set`

Arguments:
```dart
(NikuTextStyle v) 
```

Equivalent to:
```dart
{
    if (valueIndicatorTextStyle == null)
      valueIndicatorTextStyle = NikuTextStyle();

    valueIndicatorTextStyle?.apply = v;
  }
```

### applyValueIndicatorTextStyle `set`

Arguments:
```dart
(NikuTextStyle v) 
```

Equivalent to:
```dart
{
    if (valueIndicatorTextStyle == null)
      valueIndicatorTextStyle = NikuTextStyle();

    valueIndicatorTextStyle?.apply = v;
  }
```

### useTextStyle `hook`

Equivalent to:
```dart
{
    if (valueIndicatorTextStyle == null)
      valueIndicatorTextStyle = NikuTextStyle()
}
```

### useValueIndicatorTextStyle `hook`

Equivalent to:
```dart
{
    if (valueIndicatorTextStyle == null)
      valueIndicatorTextStyle = NikuTextStyle()
}
```

