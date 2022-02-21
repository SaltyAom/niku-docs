---
layout: ../../../layouts/doc.astro
title: TextStyleThemeMacro
---
Reusable shortcuts abstract class used in:


To use this macro, simply import from one of the following:
```dart
import 'package:niku/niku.dart';
import 'package:niku/macros/macros.dart';
import 'package:niku/macros/TextStyleThemeMacro.dart';
```
## TextStyleThemeMacro

### apply `set`

Arguments:
```dart
(NikuTextStyle? style
```

Equivalent to:
```dart
)
```

### h1 `set`

Arguments:
```dart
(BuildContext context) 
```

Equivalent to:
```dart
apply = Theme.of(context).textTheme.headline1?.asNiku
```

### h2 `set`

Arguments:
```dart
(BuildContext context) 
```

Equivalent to:
```dart
apply = Theme.of(context).textTheme.headline2?.asNiku
```

### h3 `set`

Arguments:
```dart
(BuildContext context) 
```

Equivalent to:
```dart
apply = Theme.of(context).textTheme.headline3?.asNiku
```

### h4 `set`

Arguments:
```dart
(BuildContext context) 
```

Equivalent to:
```dart
apply = Theme.of(context).textTheme.headline4?.asNiku
```

### h5 `set`

Arguments:
```dart
(BuildContext context) 
```

Equivalent to:
```dart
apply = Theme.of(context).textTheme.headline5?.asNiku
```

### h6 `set`

Arguments:
```dart
(BuildContext context) 
```

Equivalent to:
```dart
apply = Theme.of(context).textTheme.headline6?.asNiku
```

### body1 `set`

Arguments:
```dart
(BuildContext context) 
```

Equivalent to:
```dart
apply = Theme.of(context).textTheme.bodyText1?.asNiku
```

### body2 `set`

Arguments:
```dart
(BuildContext context) 
```

Equivalent to:
```dart
apply = Theme.of(context).textTheme.bodyText2?.asNiku
```

### subtitle1 `set`

Arguments:
```dart
(BuildContext context) 
```

Equivalent to:
```dart
apply = Theme.of(context).textTheme.subtitle1?.asNiku
```

### subtitle2 `set`

Arguments:
```dart
(BuildContext context) 
```

Equivalent to:
```dart
apply = Theme.of(context).textTheme.subtitle2?.asNiku
```

### overline `set`

Arguments:
```dart
(BuildContext context) 
```

Equivalent to:
```dart
apply = Theme.of(context).textTheme.overline?.asNiku
```

### button `set`

Arguments:
```dart
(BuildContext context) 
```

Equivalent to:
```dart
apply = Theme.of(context).textTheme.button?.asNiku
```

