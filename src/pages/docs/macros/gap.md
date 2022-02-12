---
layout: ../../../layouts/doc.astro
title: GapMacro
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

    childrenWithGap = [...children];

    for (int index = 0; index < children.length; index++)
      if (index != 0)
        childrenWithGap!.insert(
          index * 2,
          SizedBox(height: height),
        );

    childrenWithGap!.insert(
      1,
      SizedBox(width: 1, height: height),
    );
  }
```

