---
layout: ../../../layouts/doc.astro
title: ClipMacro
---
Reusable shortcuts abstract class used in:
- [Column](/docs/widgets/column)
- [GridView](/docs/widgets/gridView)
- [Row](/docs/widgets/row)


To use this macro, simply import from one of the following:
```dart
import 'package:niku/niku.dart';
import 'package:niku/macros/macros.dart';
import 'package:niku/macros/ClipMacro.dart';
```
## ClipMacro

### noClip `shortcut`

Equivalent to:
```dart
clip = Clip.none
```

### hardEdge `shortcut`

Equivalent to:
```dart
clip = Clip.hardEdge
```

### antiAlias `shortcut`

Equivalent to:
```dart
clip = Clip.antiAlias
```

### antiAliasWithSaveLayer `shortcut`

Equivalent to:
```dart
clip = Clip.antiAliasWithSaveLayer
```

