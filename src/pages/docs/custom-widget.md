---
layout: ../../layouts/doc.astro
prev: extending-niku
next: macro
title: Custom Widget
---
If collection of predefined widget doesn't have what you're looking for, you can create one yourself.

First, create a normal `StatelessWidget` like normal Widget you usually does and defined property you need.
```dart
class MyFitBox extends StatelessWidget {
  CustomWidget(this.children);

  final Widget children;
  BoxFit? fit;
}
```

You can have property with `final` value which is const and unable to change, and non-final property which will be able maniplate with dot cascade.

Next, we implement predefined macros from Niku to turns this Widget to Niku widget.
```dart
import 'package:niku/macros/macros.dart';

class MyFitBox extends StatelessWidget with NikuBuildMacro, UseQueryMacro<CustomWidget> {
  CustomWidget(this.children);

  final Widget children;
  BoxFit? fit;
}
```

The `NikuBuildMacro` need you to provide custom getter name `widget` which then the widget you want from the `build` method.

```dart
import 'package:niku/macros/macros.dart';

class MyFitBox extends StatelessWidget with NikuBuildMacro, UseQueryMacro<CustomWidget> {
  CustomWidget(this.child);

  final Widget child;
  BoxFit? fit;

  get widget => FittedBox(
    child: child,
    fit: fit,
  )
}
```

Niku provide you with a lot of predefined Macro to helps you compose your custom widget.
For example, the `BoxFitMacro` provide you some shorten syntax like `cover`, `contain` and etc to helps you compose your widget faster and easier.
```dart
class MyFitBox extends StatelessWidget with 
  NikuBuildMacro, 
  UseQueryMacro<CustomWidget>,
  BoxFitMacro {
  CustomWidget(this.child);

  final Widget child;
  BoxFit? fit;

  get widget => FittedBox(
    child: child,
    fit: fit,
  )
}
```

Congratulation, now you have just build your own Niku Widget 🎉

Now we need to do is to use it.
```dart
class MyPage extends StatelessWidget {
  const MyPage();

  @override
  build(context) {
    return MyFitBox(
      Text("My custom Niku Widget"),
    )
      ..fit = BoxFit.contain
      ..cover // equal to BoxFit.cover
      ..useParent((v) => v..bg = Colors.red);
  }
}
```

For more information about Macro, see [macro page](/docs/macro)