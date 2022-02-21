---
layout: ../../../layouts/doc.astro
title: FloatingLabelBehaviorMacro
---
Reusable shortcuts abstract class used in:


To use this macro, simply import from one of the following:
```dart
import 'package:niku/niku.dart';
import 'package:niku/macros/macros.dart';
import 'package:niku/macros/FloatingLabelBehaviorMacro.dart';
```
## FloatingLabelBehaviorMacro

### floatingLabel `set`

Arguments:
```dart
(FloatingLabelBehavior behavior) 
```

Equivalent to:
```dart
floatingLabelBehavior = behavior
```

### neverFloat `shortcut`

Equivalent to:
```dart
floatingLabelBehavior = FloatingLabelBehavior.never
```

### alwaysFloat `shortcut`

Equivalent to:
```dart
floatingLabelBehavior = FloatingLabelBehavior.always
```

### autoFloat `shortcut`

Equivalent to:
```dart
floatingLabelBehavior = FloatingLabelBehavior.auto
```

