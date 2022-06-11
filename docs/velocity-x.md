---
title: Comparison to Velocity X
---
# Comparison to Velocity X

By defination: Velocity X is a framework that gives you all of the building blocks you need to build bespoke designs without any annoying nested styles you have to fight to wrap.

Velocity X has 1 golden rule for composing the UI:
::: tip
Use methods for (widgets & setting a value) and getters for (properties & getting a value)
:::

Example of composing UI in Velocity X:
```dart
"Welcome to VelocityX"
    .text
    .white
    .xl4
    .bold
    .center
    .makeCentered()
    .box
    .roundedLg
    .red500
    .shadow2xl
    .make()
    .whHalf(context)
    .centered();
```

## Dot Notation
Velocity X use dot notation to compose UI in Flutter with predefined utilities with TailwindCSS like convention.

Velocity X also offers more utility and super-set of widgets and functions to create Flutter app like:
- `Super VX`
- State Management
- Navigation
- Utility Extension

While Niku only offers focus in composing atomic Widget instead.

## Niku
The above code would be written like this in Niku:
```dart
// using `useParent`
"Welcome to Niku".n
    ..color = Colors.white
    ..fontSize = 24
    ..bold
    ..center
    ..useParent((v) => v
        ..rounded = 12
        ..bg = Colors.red
        ..shadow = BoxShadow(color: Colors.black)
        ..wFactor = 50
        ..center,
    );

// or if you prefers proxy
"Welcome to Niku".n
    ..color = Colors.white
    ..fontSize = 24
    ..bold
    ..center
    ..n.rounded = 12
    ..n.bg = Colors.red
    ..n.shadow = BoxShadow(color: Colors.black)
    ..wFactor = 50
    ..n.center;
```

Niku is focused on composing widget on atomic-level only.

There's not many utilities function compared to Velocity X, because Niku try to stays idomatic to Flutter.

The main difference between Niku and Velocity X is that, Niku bothers re-implementing the widget to make it accepts cascade notation to make everything follows the same convention.

For example, Button:
```dart
n.Button("Increment".n)
    ..onPressed = increment
    ..fontSize = 18
    ..w500
    ..color = color
    ..bg = Colors.blue.shade50
    ..splash = Colors.blue.shade100,
    ..rounded = 4
    ..px = 24
    ..py = 12;
```

You can't compose a button or other widget beside base widget like `Text`, and `Box` in Velocity X.

Which means the convention sometime doesn't follow the other part that unable to compose in dot-notation.

## Comparison Matrix
For a clear comparison, here's a comparison matrix for you to decide.

| Feature            | Velocity X           | Niku                        |
|--------------------|----------------------|-----------------------------|
| Convention         | Tailwind             | Tailwind, SwiftUI, Flutter  |
| Composable widget  | 1 widget, 6 layout   | 30+ and expanding           |
| Reusable Style     | ❌                   | ✅ with Stylesheet           |
| Typography         | ✅ follows Tailwind  | ✅ follows Material standard |
| Responsive         | ✅ VXResposive       | ✅ useQuery, useScreen       |
| Predefined Utility | More                 | Less, only follows Flutter  |
| Automatic `build`  | ❌                   | ✅                           |
| Platform Selector  | ✅ with VXPlatform   | ✅ with usePlatformSelector  |
| Transition         | Manual               | Automatic                    |
| Flexibility        | Cover on convention  | Customizable on all proeprty |
| Performance Tuning | ❌                   | ✅ Pseudo Constant           |
| Navigation System  | ✅                   | ❌                           |
| State Management   | ✅                   | ❌                           |
| Navigation System  | ✅                   | ❌                           |

Velocity X is more opinionated on how to do things, like providing you more widget like `SuperVX` or even Navigation System, and State Management.

While Niku is purely focused on composing Widget only, and doesn't care what you wants to use in the other area as it can integrate seemlessly with almost all the codebase.

Niku also has lesser learning curve to get start as Niku supports all Flutter convention while still offers you shorter version with Tailwind convention, but in the end, if you can't remember you can just use the same property name as Flutter.

Opinion: Niku __might__ also has a little bit better convention for function, as all Niku property only use getter and setter and has a clear separation for function which is hooks.

All the function in Niku almost always have `use` to indicate that it's a function.

While in Velocity X is not very clear on which property is a function or not, for example:
```dart
"Welcome to VelocityX"
    .text
    .xl4
    .center // Why is this not a function?
    .makeCentered() // Why is this a function?
    .box
    .red500
    .make()
    .whHalf(context) // Why this is a function that require context?
    .centered() // Why this is a function?
```

###### Note:
- Automatic Build: Indicate whether or not widget required `build` function or similar to manually create a widget or not.
- Performance Tuning: A way to improve a performance when reaching a bottle-neck beside completely not using the widget.
- Transition: Velocity X rely on Animated widget and Flutter's Transition while, Niku can auto animate transition based on state's value.
- Merge-down widget: Combining duplication of widget with different value into 1 widget.
