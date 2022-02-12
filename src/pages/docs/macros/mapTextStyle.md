---
layout: ../../../layouts/doc.astro
title: MapTextStyleMacro
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
import 'package:niku/macros/MapTextStyleMacro.dart';
```
## MapTextStyleMacro

### color `set`

Arguments:
```dart
(Color v) 
```

Equivalent to:
```dart
_init(() => style?.color = v)
```

### backgroundColor `set`

Arguments:
```dart
(Color v) 
```

Equivalent to:
```dart
_init(() => style?.backgroundColor = v)
```

### bg `set`

Arguments:
```dart
(Color v) 
```

Equivalent to:
```dart
_init(() => style?.backgroundColor = v)
```

### fontFamily `set`

Arguments:
```dart
(String v) 
```

Equivalent to:
```dart
_init(() => style?.fontFamily = v)
```

### fontFamilyFallback `set`

Arguments:
```dart
(List<String> v) 
```

Equivalent to:
```dart
_init(() => style?.fontFamilyFallback = v)
```

### fontSize `set`

Arguments:
```dart
(double v) 
```

Equivalent to:
```dart
_init(() => style?.fontSize = v)
```

### fontWeight `set`

Arguments:
```dart
(FontWeight v) 
```

Equivalent to:
```dart
_init(() => style?.fontWeight = v)
```

### w100 `shortcut`

Equivalent to:
```dart
_init(() => style?.fontWeight = FontWeight.w100)
```

### w200 `shortcut`

Equivalent to:
```dart
_init(() => style?.fontWeight = FontWeight.w200)
```

### w300 `shortcut`

Equivalent to:
```dart
_init(() => style?.fontWeight = FontWeight.w300)
```

### w400 `shortcut`

Equivalent to:
```dart
_init(() => style?.fontWeight = FontWeight.w400)
```

### w500 `shortcut`

Equivalent to:
```dart
_init(() => style?.fontWeight = FontWeight.w500)
```

### w600 `shortcut`

Equivalent to:
```dart
_init(() => style?.fontWeight = FontWeight.w600)
```

### w700 `shortcut`

Equivalent to:
```dart
_init(() => style?.fontWeight = FontWeight.w700)
```

### w800 `shortcut`

Equivalent to:
```dart
_init(() => style?.fontWeight = FontWeight.w800)
```

### w900 `shortcut`

Equivalent to:
```dart
_init(() => style?.fontWeight = FontWeight.w900)
```

### bold `shortcut`

Equivalent to:
```dart
_init(() => style?.fontWeight = FontWeight.bold)
```

### fontStyle `set`

Arguments:
```dart
(FontStyle v) 
```

Equivalent to:
```dart
_init(() => style?.fontStyle = v)
```

### italic `shortcut`

Equivalent to:
```dart
_init(() => style?.fontStyle = FontStyle.italic)
```

### letterSpacing `set`

Arguments:
```dart
(double v) 
```

Equivalent to:
```dart
_init(() => style?.letterSpacing = v)
```

### wordSpacing `set`

Arguments:
```dart
(double v) 
```

Equivalent to:
```dart
_init(() => style?.wordSpacing = v)
```

### textBaseline `set`

Arguments:
```dart
(TextBaseline v) 
```

Equivalent to:
```dart
_init(() => style?.textBaseline = v)
```

### height `set`

Arguments:
```dart
(double v) 
```

Equivalent to:
```dart
_init(() => style?.height = v)
```

### leadingDistribution `set`

Arguments:
```dart
(TextLeadingDistribution v) 
```

Equivalent to:
```dart
_init(() => style?.leadingDistribution = v)
```

### locale `set`

Arguments:
```dart
(Locale v) 
```

Equivalent to:
```dart
_init(() => style?.locale = v)
```

### foreground `set`

Arguments:
```dart
(Paint v) 
```

Equivalent to:
```dart
_init(() => style?.foreground = v)
```

### background `set`

Arguments:
```dart
(Paint v) 
```

Equivalent to:
```dart
_init(() => style?.background = v)
```

### decoration `set`

Arguments:
```dart
(TextDecoration v) 
```

Equivalent to:
```dart
_init(() => style?.decoration = v)
```

### noDecoration `shortcut`

Equivalent to:
```dart
_init(() => decoration = TextDecoration.none)
```

### lineThrough `shortcut`

Equivalent to:
```dart
_init(() => decoration = TextDecoration.lineThrough)
```

### aboveline `shortcut`

Equivalent to:
```dart
_init(() => decoration = TextDecoration.overline)
```

### underline `shortcut`

Equivalent to:
```dart
_init(() => decoration = TextDecoration.underline)
```

### decorationColor `set`

Arguments:
```dart
(Color v) 
```

Equivalent to:
```dart
_init(() => style?.decorationColor = v)
```

### decorationThickness `set`

Arguments:
```dart
(double v) 
```

Equivalent to:
```dart
_init(() => style?.decorationThickness = v)
```

### decorationStyle `set`

Arguments:
```dart
(TextDecorationStyle v) 
```

Equivalent to:
```dart
_init(() => style?.decorationStyle = v)
```

### solid `shortcut`

Equivalent to:
```dart
_init(() => decorationStyle = TextDecorationStyle.solid)
```

### doubleLine `shortcut`

Equivalent to:
```dart
_init(() => decorationStyle = TextDecorationStyle.double)
```

### dotted `shortcut`

Equivalent to:
```dart
_init(() => decorationStyle = TextDecorationStyle.dotted)
```

### dashed `shortcut`

Equivalent to:
```dart
_init(() => decorationStyle = TextDecorationStyle.dashed)
```

### wavy `shortcut`

Equivalent to:
```dart
_init(() => decorationStyle = TextDecorationStyle.wavy)
```

### debugLabel `set`

Arguments:
```dart
(String v) 
```

Equivalent to:
```dart
_init(() => style?.debugLabel = v)
```

### shadows `set`

Arguments:
```dart
(List<Shadow> v) 
```

Equivalent to:
```dart
_init(() => style?.shadows = v)
```

### fontFeatures `set`

Arguments:
```dart
(List<FontFeature> v) 
```

Equivalent to:
```dart
_init(() => style?.fontFeatures = v)
```

### overflow `set`

Arguments:
```dart
(TextOverflow v) 
```

Equivalent to:
```dart
_init(() => style?.overflow = v)
```

### package `set`

Arguments:
```dart
(String v) 
```

Equivalent to:
```dart
_init(() => style?.package = v)
```

### h1 `set`

Arguments:
```dart
(BuildContext context) 
```

Equivalent to:
```dart
_init(() => style?.apply = Theme.of(context).textTheme.headline1?.asNiku)
```

### h2 `set`

Arguments:
```dart
(BuildContext context) 
```

Equivalent to:
```dart
_init(() => style?.apply = Theme.of(context).textTheme.headline2?.asNiku)
```

### h3 `set`

Arguments:
```dart
(BuildContext context) 
```

Equivalent to:
```dart
_init(() => style?.apply = Theme.of(context).textTheme.headline3?.asNiku)
```

### h4 `set`

Arguments:
```dart
(BuildContext context) 
```

Equivalent to:
```dart
_init(() => style?.apply = Theme.of(context).textTheme.headline4?.asNiku)
```

### h5 `set`

Arguments:
```dart
(BuildContext context) 
```

Equivalent to:
```dart
_init(() => style?.apply = Theme.of(context).textTheme.headline5?.asNiku)
```

### h6 `set`

Arguments:
```dart
(BuildContext context) 
```

Equivalent to:
```dart
_init(() => style?.apply = Theme.of(context).textTheme.headline6?.asNiku)
```

### body1 `set`

Arguments:
```dart
(BuildContext context) 
```

Equivalent to:
```dart
_init(() => style?.apply = Theme.of(context).textTheme.bodyText1?.asNiku)
```

### body2 `set`

Arguments:
```dart
(BuildContext context) 
```

Equivalent to:
```dart
_init(() => style?.apply = Theme.of(context).textTheme.bodyText2?.asNiku)
```

### subtitle1 `set`

Arguments:
```dart
(BuildContext context) 
```

Equivalent to:
```dart
_init(() => style?.apply = Theme.of(context).textTheme.subtitle1?.asNiku)
```

### subtitle2 `set`

Arguments:
```dart
(BuildContext context) 
```

Equivalent to:
```dart
_init(() => style?.apply = Theme.of(context).textTheme.subtitle2?.asNiku)
```

### overline `set`

Arguments:
```dart
(BuildContext context) 
```

Equivalent to:
```dart
_init(() => style?.apply = Theme.of(context).textTheme.overline?.asNiku)
```

### button `set`

Arguments:
```dart
(BuildContext context) 
```

Equivalent to:
```dart
_init(() => style?.apply = Theme.of(context).textTheme.button?.asNiku)
```

### Function `hook`

Arguments:
```dart
 cb) 
```

Equivalent to:
```dart
{
    if (style == null) style = NikuTextStyle()
}
```

