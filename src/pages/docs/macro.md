---
layout: ../../layouts/doc.astro
prev: custom-widget
next: performance
title: Macro
---
Macro is an abstract class to use Dependency Injection into our widget.

Different from Niku 1, Niku 2 use helps of abstract class defined with set of custom property and method to reduce duplications of the code with same purpose and reuse on all Widget as need. 

For example, to build shorten method of `alignment`, Niku use `AlignmentDirectionalMacro`.
```dart
abstract class AlignmentDirectionalMacro {
  AlignmentGeometry? alignment;

  void get topStart => alignment = AlignmentDirectional.topStart;
  void get topCenter => alignment = AlignmentDirectional.topCenter;
  // ... Other shorten syntax
}
```

Then once Macro is created, it can be used to apply all the classes that need.
You can used predefined macro to removed redundant task from your custom Niku widget.
```dart
class MyCustomWidget extends StatelessWidget with AlignmentDirectionalMacro {
  const MyCustomWidget();
}

class AnotherWidget extends StatelessWidget with AlignmentDirectionalMacro {
  const AnotherWidget();
}
```

You might remember from [custom widget](/docs/custom-widget) that every Niku Widget all implement `NikuBuildMacro` and optional `UseQueryMacro`.

Both is actually just syntax sugar to handle build method and compose Niku widget with parent which is as the same as every Macro that used on every Niku Widget, injecting custom code which handle task for us.

Remember that widget with `NikuBuildMacro` doesn't need `build` method even if it extends `StatelessWidget` which required it? That because the macro already inject the custom `build` method for us so we don't have to do anything.

All we need to do is just provide the `widget` getter to be invoked from custom build method we injected. 
