---
layout: ../../../layouts/doc.astro
title: KeyboardTypeMacro
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
import 'package:niku/macros/KeyboardTypeMacro.dart';
```
## KeyboardTypeMacro

### datetimeKeyboard `shortcut`

Equivalent to:
```dart
keyboardType = TextInputType.datetime
```

### emailKeyboard `shortcut`

Equivalent to:
```dart
keyboardType = TextInputType.emailAddress
```

### multilineKeyboard `shortcut`

Equivalent to:
```dart
keyboardType = TextInputType.multiline
```

### nameKeyboard `shortcut`

Equivalent to:
```dart
keyboardType = TextInputType.name
```

### numberKeynoard `shortcut`

Equivalent to:
```dart
keyboardType = TextInputType.number
```

### phoneKeybaord `shortcut`

Equivalent to:
```dart
keyboardType = TextInputType.phone
```

### addressKeyboard `shortcut`

Equivalent to:
```dart
keyboardType = TextInputType.streetAddress
```

### textKeyboard `shortcut`

Equivalent to:
```dart
keyboardType = TextInputType.text
```

### urlKeyboard `shortcut`

Equivalent to:
```dart
keyboardType = TextInputType.url
```

### passwordKeyboard `shortcut`

Equivalent to:
```dart
keyboardType = TextInputType.visiblePassword
```

### noKeyboard `shortcut`

Equivalent to:
```dart
keyboardType = TextInputType.none
```

### decimal `shortcut`

Equivalent to:
```dart
keyboardType = TextInputType.numberWithOptions(decimal: true)
```

