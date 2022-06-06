---
title: Naming Convention
---
# Naming Convention
Niku property is inspired and borrowed lots of pattern from many language and framework.

- Property builder approach from SwiftUI
- Naming Convention inspired by TailwindCSS.
- Hook inspired by React
- Cascade Notation for idomatic Dart

## Shortcut
Most Niku property is based on either `getter` or `setter`.

- **Setter**: accepts one parameter
- **Getter**: doesn't accept any parameter
```dart
"Text".n
    // getter
    ..bold
    // setter
    ..color = Colors.red
```

All getter and setter caused side-effect in Niku, so it's not a pure function.
You can separated them by type.

- If property return void or dynamic, then it's mutable getter
- If property accepts parameter, then it's setter

Mutable getter is fine in Niku, there will be a problem mixing pure and im-pure function together because it's not consistence.

## Hook
A function which will accept parameter and does something.

Hook will almost always have the `use` prefix, which indicate it as a function.

```dart
"Hello".n
    // Shortcut
    ..fontSize = 21
    // Hook (prefix with "use")
    ..useThemeSelector(dark: (v) => v..color = Colors.white);
```

The only exception for hook is:
- on

## Tailwind
Most property naming convention is ported from TailwindCSS.

- p for padding
- m for margin
- ml for margin left
- bg for backgroundColor

Even with the `useScreen` screen size is also borrow from Tailwind.
```dart
void useScreen(
    BuildContext context, {
    // > 568px
    T Function(T)? base,
    // 568 - 640px
    T Function(T)? xs,
    // 640 - 768px
    T Function(T)? sm,
    // 768 - 920px
    T Function(T)? md,
    // 920 - 1024px
    T Function(T)? lg,
    // > 1024px
    T Function(T)? xl,
})
```

However, all the property accepts the same name native to Flutter.
So if you're not sure what's the name for property you're looking for is, you can just use native Flutter property name.

Shorten name property is for convenient purpose, it act as the same as normal Flutter property, so use whether you're comfortable with.
