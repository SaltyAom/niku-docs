---
layout: ../../../layouts/doc.astro
title: InsetPaddingMacro
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
import 'package:niku/macros/InsetPaddingMacro.dart';
```
## InsetPaddingMacro

### pt `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => insetPadding!.top = padding)
```

### pl `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => insetPadding!.left = padding)
```

### pb `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => insetPadding!.bottom = padding)
```

### pr `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => insetPadding!.right = padding)
```

### px `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
{
    _initialize(() {
      insetPadding!.left = padding;
      insetPadding!.right = padding;
    });
  }
```

### py `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
{
    _initialize(() {
      insetPadding!.top = padding;
      insetPadding!.bottom = padding;
    });
  }
```

### p `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
{
    _initialize(() {
      insetPadding!.top = padding;
      insetPadding!.bottom = padding;
      insetPadding!.left = padding;
      insetPadding!.right = padding;
    });
  }
```

