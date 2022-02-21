---
layout: ../../../layouts/doc.astro
title: WrapCrossAxisMacro
---
Reusable shortcuts abstract class used in:


To use this macro, simply import from one of the following:
```dart
import 'package:niku/niku.dart';
import 'package:niku/macros/macros.dart';
import 'package:niku/macros/WrapCrossAxisMacro.dart';
```
## WrapCrossAxisMacro

### wrapCross `set`

Arguments:
```dart
(WrapCrossAlignment value) 
```

Equivalent to:
```dart
crossAxisAlignment = value
```

### crossStart `shortcut`

Equivalent to:
```dart
crossAxisAlignment = WrapCrossAlignment.start
```

### crossCenter `shortcut`

Equivalent to:
```dart
crossAxisAlignment = WrapCrossAlignment.center
```

### crossEnd `shortcut`

Equivalent to:
```dart
crossAxisAlignment = WrapCrossAlignment.end
```

