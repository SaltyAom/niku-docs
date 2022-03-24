---
layout: ../../layouts/doc.astro
prev: what-next
next: extending-niku
title: Style Sheet
---
Stylesheet is one of the most powerful pattern in Niku.
With `apply` and `use`, you can predefined and reuse your style anywhere like CSS stylesheet, so the pattern is called `Style Sheet Pattern` in Niku.

Simply defined style somewhere
```dart
class MyStyleSheet {
  static final title = n.Text("")
    ..fontSize = 24
    ..bold;

  static final roundedBox = n.Text("")
    ..center
    ..p = 24
    ..rounded

  static final withBg = (Color color) => n.Text("")
    ..useParent((v) => v..bg = color);
}
```

Then you use `apply` to apply 1 style at the time:
```dart
n.Text("Styled Text")
  ..apply = MyStyleSheet.title;
```

Or use `use` to apply multiple styles.
###### `use` follows hook naming convention, so it's a function
```dart
typedef s = MyStyleSheet;

n.Text("Styled Text")
  ..use([
    s.title,
    s.roundedBox,
    s.withBg(Colors.red),
  ]);
```

Niku handle both property and parent builders, which means all the style will eventually applied by order which is as the same as if you're specifying the property directly.

Of course, it follows priority order, which means what came later will override the existing style.
```dart
n.Text("Styled Text")
  ..color = Colors.red    // Will be overridden
  ..use([
    s.title,
    s.roundedBox,
    s.withBg(Colors.red),
  ])
  ..color = Colors.blue   // Will override;
```

## Derived Style
Like CSS-in-JS, you can derived style from existing style.

Simply reference the style and called `.copied` then feels free to modified your style.
```dart
class MyStyleSheet {
  static final title = n.Text("")
    ..fontSize = 24
    ..bold;

  static final titleWithBg = (Color color) => title.copied
    ..useParent((v) => v..bg = color);
}
```
The `copied` method is important because Dart borrowing mechanism.
If you assign a class to new variable, it doesn't get copied, it's just a reference to the original class.
So if you modified the new variable, the old class will also be affected.

To prevent side-effect of deriving a styled in Niku, you would need to called `.copied` to create a new copy of the class instance.

With copy, your modification won't affect to original style, thus side-effect free.

Or if you have to derived multiple styled, simply use `use` and `apply` like you would used in normal Niku widget. 
```dart
class S {
  static final title = n.Text("")
    ..fontSize = 24
    ..bold;

  static final roundedBox = n.Text("")
    ..center
    ..useParent((v) => v
      ..p = 24
      ..rounded
    );

  static final withBg = (Color color) => n.Text("")
    ..useParent((v) => v..bg = color);

  static final titleWithRoundedBg = n.Text("")
    ..use([S.title, S.roundedBox, S.withBg])
}
```
Using `apply`, `use` is side-effect free, and because you already initialized new class instance, you don't need to called `copied`.

With Style Sheet Pattern, you can easily build your own "CSS library" like or design system with Niku.
