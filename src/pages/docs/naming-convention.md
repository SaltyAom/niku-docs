---
layout: ../../layouts/doc.astro
prev: parent
next: what-next
title: Naming Convention
---
Niku is inspired and borrow a lot of concept from many language and framework.

- Property builder approach from SwiftUI
- Naming Convention heavily inspired by TailwindCSS.
- Hook inspired by React
- Dot Cascade from Dart

## Getter Setter
Most of property builder of Niku is either `getter` or `setter`.

Setter is a property that could accept `one parameter` at the time.
```dart
n.Text()
  ..color = Colors.red
```

While `getter` doesn't accept any parameter, in Niku, it doesn't return any value either, however it will mutate internal property value for example.
```dart
n.Text()
  ..bold
```

## Tailwind
Niku use shorten idea from Tailwind and directly port most of the naming convention from Tailwind to Niku.

For example:
- margin as `m`
- margin-left as `ml`
- border as `b`
- border width as `bw`

Even with the `useScreen` predefined screen size's naming convention is also borrow from Tailwind.
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

However, Niku also trying to match to idiomatic Flutter and dart for example:
- builder
- animatedBuilder
- singleChildScrollView

Niku also uses some shorten name a `scrollable` as a reduced form of `singleChildScrollView`.

## Hook
[Hook](/docs/hook) naming convention come from React, it's a function which will handle parameter and does something, anything that prefix with `use` will be a function, otherswise it will be either `getter` or `setter.

Mostly if you don't know if a widget is available, you can try using a full name to see autocomplete suggestion.

```dart
n.TextFormField()
  ..useDecoration((v) => v..outlined)
```
