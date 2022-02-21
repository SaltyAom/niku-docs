---
layout: ../../../layouts/doc.astro
title: ApplyTextMacro
---
Reusable shortcuts abstract class used in:
- [DropdownButton](/docs/widgets/dropdownButton)
- [RangeSlider](/docs/widgets/rangeSlider)
- [SelectableText](/docs/widgets/selectableText)
- [Slider](/docs/widgets/slider)
- [Text](/docs/widgets/text)
- [TextFormField](/docs/widgets/textFormField)


To use this macro, simply import from one of the following:
```dart
import 'package:niku/niku.dart';
import 'package:niku/macros/macros.dart';
import 'package:niku/macros/ApplyTextMacro.dart';
```
## ApplyTextMacro

### applyTextStyle `set`

Arguments:
```dart
(NikuTextStyle v) 
```

Equivalent to:
```dart
{
    if (style == null) style = NikuTextStyle();

    style?.apply = v;
  }
```

### useTextStyle `hook`

Equivalent to:
```dart
{
    if (style == null) style = NikuTextStyle()
}
```

