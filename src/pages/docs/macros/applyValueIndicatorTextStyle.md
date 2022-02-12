---
layout: ../../../layouts/doc.astro
title: ApplyValueIndicatorTextStyleMacro
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

