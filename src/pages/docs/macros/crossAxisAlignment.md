---
layout: ../../../layouts/doc.astro
title: CrossAxisAlignmentMacro
---
Reusable shortcuts abstract class used in:
- [Alert](/docs/widgets/alert)
- [Button](/docs/widgets/button)
- [Checkbox](/docs/widgets/checkbox)
- [CheckboxListTile](/docs/widgets/checkboxListTile)
- [Column](/docs/widgets/column)
- [DropdownButton](/docs/widgets/dropdownButton)
- [GridView](/docs/widgets/gridView)
- [Icon](/docs/widgets/icon)
- [IconButton](/docs/widgets/iconButton)
- [Image](/docs/widgets/image)
- [PopupMenuButton](/docs/widgets/popupMenuButton)
- [RangeSlider](/docs/widgets/rangeSlider)
- [Row](/docs/widgets/row)
- [SelectableText](/docs/widgets/selectableText)
- [Slider](/docs/widgets/slider)
- [Stack](/docs/widgets/stack)
- [Switch](/docs/widgets/switch)
- [Text](/docs/widgets/text)
- [TextFormField](/docs/widgets/textFormField)
- [Wrap](/docs/widgets/wrap)


To use this macro, simply import from one of the following:
```dart
import 'package:niku/niku.dart';
import 'package:niku/macros/macros.dart';
import 'package:niku/macros/CrossAxisAlignmentMacro.dart';
```
## CrossAxisAlignmentMacro

### crossAxis `set`

Arguments:
```dart
(CrossAxisAlignment value) 
```

Equivalent to:
```dart
crossAxisAlignment = value
```

### crossStart `shortcut`

Equivalent to:
```dart
crossAxisAlignment = CrossAxisAlignment.start
```

### crossCenter `shortcut`

Equivalent to:
```dart
crossAxisAlignment = CrossAxisAlignment.center
```

### crossEnd `shortcut`

Equivalent to:
```dart
crossAxisAlignment = CrossAxisAlignment.end
```

### crossBaseline `shortcut`

Equivalent to:
```dart
crossAxisAlignment = CrossAxisAlignment.baseline
```

### crossStretch `shortcut`

Equivalent to:
```dart
crossAxisAlignment = CrossAxisAlignment.stretch
```

### baseline `shortcut`

Equivalent to:
```dart
crossAxisAlignment = CrossAxisAlignment.baseline
```

### stretch `shortcut`

Equivalent to:
```dart
crossAxisAlignment = CrossAxisAlignment.stretch
```

