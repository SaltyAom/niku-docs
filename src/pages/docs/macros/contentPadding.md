---
layout: ../../../layouts/doc.astro
title: ContentPaddingMacro
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
import 'package:niku/macros/ContentPaddingMacro.dart';
```
## ContentPaddingMacro

### pt `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => contentPadding!.top = padding)
```

### pl `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => contentPadding!.left = padding)
```

### pb `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => contentPadding!.bottom = padding)
```

### pr `set`

Arguments:
```dart
(double padding) 
```

Equivalent to:
```dart
_initialize(() => contentPadding!.right = padding)
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
      contentPadding!.left = padding;
      contentPadding!.right = padding;
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
      contentPadding!.top = padding;
      contentPadding!.bottom = padding;
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
      contentPadding!.top = padding;
      contentPadding!.bottom = padding;
      contentPadding!.left = padding;
      contentPadding!.right = padding;
    });
  }
```

