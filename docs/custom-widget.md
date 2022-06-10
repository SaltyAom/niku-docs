# Custom Widget
If you're a library maintainer or wants to create a widget to implemented Niku convention.

You can easily create your own.

## Creating your Niku Widget
Niku widget is actually a `StatelessWidget` with applying predefined abstraction.

First, let's create a `StatelessWidget`, and defined the property you need.
```dart
class MyFitBox extends StatelessWidget {
    CustomWidget({
        this.child,
        this.fit,
    });

    Widget? child;
    BoxFit? fit;
}
```

You can have property with final value which is const and unable to change, and non-final property which will be able maniplate with cascade notation.

Next, we implement predefined macros from Niku to turns this Widget to Niku widget.
```dart
import 'package:niku/macros/macros.dart';

class MyFitBox extends StatelessWidget with 
    NikuBuildMacro<NikuButton> {
    CustomWidget({
        this.child,
        this.fit,
    });

    Widget? child;
    BoxFit? fit;

    widget(context) => FittedBox(
        chjild: child,
        fit: fit,
    );
}
```

- `NikuBuildMacro` provide you a build method, parent styling and utility hooks.

Then use it.
```dart
MyFitBox("Cool box".n)
    ..fit = BoxFix.cover
    ..n.bg = Colors.red;
```

:tada: Congratulation, now you have just build your own Niku Widget

## Predefined Macro
However, some properties Niku have already defined a shortcut for you, so you can reuse it.

Like `BotFitMacro` which will added more shortcut to it.
```dart
import 'package:niku/macros/macros.dart';

class MyFitBox extends StatelessWidget with 
    BoxFitMacro // Add BoxFit shortcut
    /* ... */ {
    // ...
}

MyFitBox("Cool box".n)
    ..cover  // Shortcut from BoxFitMacro
    ..n.bg = Colors.red;
```

Niku have a lot of macros predefined, so all you need to do is to use it.
