---
layout: ../../../layouts/doc.astro
title: ActionPaddingMacro
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
import 'package:niku/macros/ActionPaddingMacro.dart';
```
## ActionPaddingMacro

### pt `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => actionPadding!.top = padding)
```

### pl `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => actionPadding!.left = padding)
```

### pb `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => actionPadding!.bottom = padding)
```

### pr `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => actionPadding!.right = padding)
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
      actionPadding!.left = padding;
      actionPadding!.right = padding;
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
      actionPadding!.top = padding;
      actionPadding!.bottom = padding;
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
      actionPadding!.top = padding;
      actionPadding!.bottom = padding;
      actionPadding!.left = padding;
      actionPadding!.right = padding;
    });
  }
```

