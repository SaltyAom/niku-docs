---
layout: ../../layouts/doc.astro
next: quickstart
title: Introduction
---
Styling in Flutter is complex and verbose.

Developers have to describe every styling detail to Widget. 
It's like low-level programming UI, having to adapt between property is hard when some are more complex than others, for instance, `MaterialStateProperty`.

When the codebase gets more complex, the syntax of Flutter itself is too verbose, nested than it should be, result being hard to maintain mostly known as `Nested Hell`.

Niku helps to solve the problem by providing a dot cascade to style widget.
Exposing the same naming convention, shorten property, parent builder and style extraction.

Providing a smoother, shorter yet, more straightforward and maintainable way to compose styling in Flutter.

## Traditional Flutter
For example, with traditional Flutter, adding padding to the text would add an unnecessary nest as the following:

```dart
Padding(
  padding: EdgeInsets.all(20),
  child: Text(
    "Hello World",
    style: const TextStyle(
      color: Colors.blue,
      fontSize: 21,
    ),
  ),
);
```

In a real-world app, composing the layout becomes complex quickly as it becomes more and more nested means it's harder to read and maintain.

Niku eliminates the nested hell problem of Flutter, by providing encapsulated property instead of being nested in the same way like SwiftUI did.

## Niku
Let's rewrite the upper code with Niku:

```dart
import 'package:niku/niku.dart'; // <--- Import Niku library

NikuText("Hello World")
  ..color = Colors.blue
  ..fontSize = 21
  ..useParent((v) => v..p = 20)
```

Or even better readability with namespace:
```dart
import 'package:niku/niku.dart';
import 'package:niku/namespace.dart' as n; // <--- Import namespace

n.Text("Hello World")
  ..color = Colors.blue
  ..fontSize = 21
  ..useParent((v) => v
    ..p = 20
    ..bg = Colors.red
  )
```

As you might guess the code, instead of reading inside-out of traditional Flutter, Niku provides top-to-bottom to describe the styling, make it more predictable and straightforward.

Or extract the styling out of the widget and reuse it everywhere like CSS.
```dart
class Styles {
  static final title = n.Text("")
    ..color = Colors.blue
    ..fontSize = 21

  static redBox(Niku v) => v
    ..p = 20
    ..bg = Colors.red
}

n.Text("Hello World")
  ..apply = Styles.title
  ..bold
  ..useParent(redBox)
```

Or derive style from another style.
```dart
class Styles {
  static final title = n.Text("")
    ..color = Colors.blue
    ..fontSize = 21

  static final boldTitle = Styles.title.copied
    ..bold

  static redBox(Niku v) => v
    ..p = 20
    ..bg = Colors.red
}

n.Text("Hello World")
  ..apply = Styles.boldTtile
  ..useParent(redBox)
```
Niku make styling simple while opening new possibilities of how the styling in Flutter should be.

Niku can get along with any codebase and still works as expected.
