---
layout: ../../layouts/doc.astro
title: Repaint
setup: |
    import { Prism } from 'astro/components';
---

You can improve performance of Niku by repreventing repaint of Niku widget.
This will helps Flutter Skia engine does less work and prevent unnecessary resource being used from re-render.

As Niku widget can't be `const` because not every field can be `final`.
Which is why every Niku Widget has the `.freezed` and `.on` properties to make is `pseudo` constantable by preventing repaint if need.

Simply add `.freezed` to expensive Widget which doesn't required any change no matter what.
```dart
n.Text("Hello World")
  ..freezed
```

For widget which depends on some state, simply use `.on` and add the states which when changed will update the widget.
```dart
n.Text("Counter: ${counter}")
  ..on = [counter]
```

## Niku On
For extreme situation where `.on` and `.freezed` is not enough, simply use `NikuOn`.

This is a custom widget which does the same job as `on` but will also prevent the allocation of Widget itself.

Because of dot cascade purpose, every Niku widget always allocate some memory even if it doesn't get repaint, using `NikuOn` will prevent that memory allocation and only allocate when only the state is change.

```dart
NikuOn(
  () => NikuText("Counter: ${counter}"), 
  [counter],
);

// Or with namespace
import 'package:niku/namespace.dart' as n;

n.On(
  () => n.Text("Counter: ${counter}"), 
  [counter],
);
```

Although, `NikuOn` have significant increase performance, but Niku is build on top of the idea to improve `Developer Experience` first while `NikuOn` added more nested syntax to the widget itself which is harder to maintain.

Thus, `.freezed` and `.on` is fast enough for most of the time.
