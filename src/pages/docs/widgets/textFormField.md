---
layout: ../../../layouts/doc.astro
title: TextFormField
---
Representation of TextFormField


To use this widget, simply import from the of the following:
```dart
import 'package:niku/niku.dart';
import 'package:niku/namespace.dart';
import 'package:niku/widget/widget.dart';
import 'package:niku/widget/textFormField.dart';
```
## Factory method:
- adaptive
- cupertino


## Cascasde properties:
To use dot cascade, simply use the following syntax:

```dart
NikuTextFormField
  ..controller = data
  ..initialValue = data
```

## Macros:
This widget implement the following macros (shortcut):
- [ApplyTextMacro](/docs/macros/applyText)
- [ApplyInputDecorationMacro](/docs/macros/applyInputDecoration)
- [TextAlignMacro](/docs/macros/textAlign)
- [TextDirectionMacro](/docs/macros/textDirection)
- [KeyboardTypeMacro](/docs/macros/keyboardType)
- [TextAlignMacro](/docs/macros/textAlign)
- [TextCapitalizationMacro](/docs/macros/textCapitalization)
- [TextInputActionMacro](/docs/macros/textInputAction)

## ApplyTextMacro
Implement [ApplyTextMacro](/docs/macros/applyText) abstract class

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

## ApplyInputDecorationMacro
Implement [ApplyInputDecorationMacro](/docs/macros/applyInputDecoration) abstract class

### applyDecoration `set`

Arguments:
```dart
(NikuInputDecoration v) 
```

Equivalent to:
```dart
{
    if (decoration == null) decoration = NikuInputDecoration();

    decoration?.apply = v;
  }
```

### useDecoration `hook`

Equivalent to:
```dart
{
    if (decoration == null) decoration = NikuInputDecoration()
}
```

## TextAlignMacro
Implement [TextAlignMacro](/docs/macros/textAlign) abstract class

### left `shortcut`

Equivalent to:
```dart
textAlign = TextAlign.left
```

### center `shortcut`

Equivalent to:
```dart
textAlign = TextAlign.center
```

### right `shortcut`

Equivalent to:
```dart
textAlign = TextAlign.right
```

### start `shortcut`

Equivalent to:
```dart
textAlign = TextAlign.start
```

### justify `shortcut`

Equivalent to:
```dart
textAlign = TextAlign.justify
```

### end `shortcut`

Equivalent to:
```dart
textAlign = TextAlign.end
```

## TextDirectionMacro
Implement [TextDirectionMacro](/docs/macros/textDirection) abstract class

### ltr `shortcut`

Equivalent to:
```dart
textDirection = TextDirection.ltr
```

### rtl `shortcut`

Equivalent to:
```dart
textDirection = TextDirection.rtl
```

## KeyboardTypeMacro
Implement [KeyboardTypeMacro](/docs/macros/keyboardType) abstract class

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

## TextAlignMacro
Implement [TextAlignMacro](/docs/macros/textAlign) abstract class

### left `shortcut`

Equivalent to:
```dart
textAlign = TextAlign.left
```

### center `shortcut`

Equivalent to:
```dart
textAlign = TextAlign.center
```

### right `shortcut`

Equivalent to:
```dart
textAlign = TextAlign.right
```

### start `shortcut`

Equivalent to:
```dart
textAlign = TextAlign.start
```

### justify `shortcut`

Equivalent to:
```dart
textAlign = TextAlign.justify
```

### end `shortcut`

Equivalent to:
```dart
textAlign = TextAlign.end
```

## TextCapitalizationMacro
Implement [TextCapitalizationMacro](/docs/macros/textCapitalization) abstract class

### capitalWords `shortcut`

Equivalent to:
```dart
textCapitalization = TextCapitalization.words
```

### capitalCharacters `shortcut`

Equivalent to:
```dart
textCapitalization = TextCapitalization.characters
```

### capitalNone `shortcut`

Equivalent to:
```dart
textCapitalization = TextCapitalization.none
```

### capitalSentences `shortcut`

Equivalent to:
```dart
textCapitalization = TextCapitalization.sentences
```

## TextInputActionMacro
Implement [TextInputActionMacro](/docs/macros/textInputAction) abstract class

### continueAction `shortcut`

Equivalent to:
```dart
textInputAction = TextInputAction.continueAction
```

### doneAction `shortcut`

Equivalent to:
```dart
textInputAction = TextInputAction.done
```

### emergencyCallAction `shortcut`

Equivalent to:
```dart
textInputAction = TextInputAction.emergencyCall
```

### goAction `shortcut`

Equivalent to:
```dart
textInputAction = TextInputAction.go
```

### joinAction `shortcut`

Equivalent to:
```dart
textInputAction = TextInputAction.join
```

### newLineAction `shortcut`

Equivalent to:
```dart
textInputAction = TextInputAction.newline
```

### nextAction `shortcut`

Equivalent to:
```dart
textInputAction = TextInputAction.next
```

### noneAction `shortcut`

Equivalent to:
```dart
textInputAction = TextInputAction.none
```

### previousAction `shortcut`

Equivalent to:
```dart
textInputAction = TextInputAction.previous
```

### routeAction `shortcut`

Equivalent to:
```dart
textInputAction = TextInputAction.route
```

### searchAction `shortcut`

Equivalent to:
```dart
textInputAction = TextInputAction.search
```

### sendAction `shortcut`

Equivalent to:
```dart
textInputAction = TextInputAction.send
```

### unspecifiedAction `shortcut`

Equivalent to:
```dart
textInputAction = TextInputAction.unspecified
```

