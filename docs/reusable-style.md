---
title: Reusable Style
---
# Reusable Style
You will find out that you've been re-applying the same style over and over again.

And sometime, it's quite long and a little bit too verbose to re-apply to every widget you've been using, and you wish they were shorter.

Worry not, with Niku you can extract the duplicated and redundant styling and be able to re-apply to it again.

The pattern is inspired by CSS, so it's called **Style Sheet Pattern**.

## Stylesheet Pattern
```dart
class ButtonStyle {
  static final confirm = n.Button("".n)
    ..bold
    ..fontSize = 24
    ..splash = Colors.blue.shade400
    ..bg = Colors.blue.shade50
    ..px = 16
    ..py = 8
    ..rounded = 8;
}

// ✅ This will apply all the styling with 1 line
n.Button("".n)
    ..apply = ButtonStyle.confirm;
```

The different between using Style Sheet and declaring new widget is that, with StyleSheet you can still modified its property while new widget can't.
```dart
n.Button("".n)
    ..apply = StyleSheet.title
    // ✅ You can apply more styling here
    ..onPressed = log;
```

Or appling multiple styles at the same time.
```dart
// ✅ Multiple styling is ok
n.Button("".n)
    ..apply = ButtonStyle.confirm
    ..apply = ButtonStyle.large;

// ✅ Or combine multiple style into 1 line with 'use'
n.Button("".n)
    ..use([
        ButtonStyle.confirm, 
        ButtonStyle.large
    ]);
```

And when you need it to be more dynamic, you can also accept a parameters to the styling it.
```dart
class TextStyle {
    static final title = (Color color) => n.Text("")
        ..fontSize = 24
        ..bold
        ..color = color;
}

"Applied with color".n
    ..apply = title(Colors.red);
```

## Derived Style
Applying multiple style might be convinent, but what if you wants to combined multiple style into 1 to reduce `..apply`?

You can derived a style, or basically base a style from an old one.
```dart
class TextStyle {
    static final title = "".n
        ..fontSize = 24;

    // ✅ Copied, so no side-effect occurs
    static final headline = title
        .copied  // <--- Notice that we copied the style
        ..bold;

    // ✅ This works, because you create a new widget not referencing to 'title'
    static final blue = "".n
        ..apply = title
        ..color = Colors.blue;
}
```
The **copied method is important** because Dart borrowing mechanism.

If you assign a class to new variable, it doesn’t get copied, it's a reference to the original class.
So if you modified it, the old class will also be affected.

To prevent side-effect of deriving a styled, you would need to called .copied to create a new copy of the class instance.

With copy, your modification won’t affect to original style, thus side-effect free.

However, you can also use `..apply` instead if you're creating a new widget instead of basing on them.

You would wants to create a new widget when combining multiple styles.
```dart
class MultipleStyles {
    static final title = "".n
        ..fontSize = 24
        ..bold;

    static final roundedBox = "".n
        ..center
        ..m = 24
        ..rounded;

    static final withBg = (Color bg) => "".n
        ..n.bg = bg;

    // Declare a new widget because you're applying
    // 3 styles instead of derived from one      
    static final titleWithRoundedBg = "".n
        ..use([
            S.title, 
            S.roundedBox, 
            S.withBg(Colors.blue)
        ]);
}
```
