---
layout: ../../../layouts/doc.astro
title: TextDecorationMacro
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
import 'package:niku/macros/TextDecorationMacro.dart';
```
## TextDecorationMacro

### noDecoration `shortcut`

Equivalent to:
```dart
decoration = TextDecoration.none
```

### lineThrough `shortcut`

Equivalent to:
```dart
decoration = TextDecoration.lineThrough
```

### aboveline `shortcut`

Equivalent to:
```dart
decoration = TextDecoration.overline
```

### underline `shortcut`

Equivalent to:
```dart
decoration = TextDecoration.underline
```

