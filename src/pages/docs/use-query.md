---
layout: ../../layouts/doc.astro
prev: performance
next: adaptive
title: useQuery
---
Niku have some utilities method which helps you in cross platform environment where you need to adapt your UI to adapt to screen size, dark mode and etc.

You can use `useSize` utilities which present on both property and parent builder.
```dart
n.Text("")
  .useSize(context, (widget, size) => 
    widget..fontSize = size.width > 568
      ? 72
      : 48
  );

n.Box()
  ..useSize((widget, size) =>
    size.widget > 568
      ? BigScreenWidget(widget)
      : SmallScreenWidget(widget)
  );
```
##### Note: screen utilities require BuildContext, however parent builder use the `Builder` widget under the hood so you don't have to manually pass widget there, but for property builder, you will required to manually pass BuildContext.

Or you can use the predefined `useScreen` which has the predefined `width` to handle.
```dart
n.Text..useScreen(
  context,
  base: (v) => v..color = Colors.red,
  xs: (v) => v..color = Colors.blue,
);

n.Box()
  ..useScreen(
    base: (v) => SmallScreenWidget(v),
    xs: (v) => ALittleBigBiggerWidget(v),
    md: (v) => BigScreenWidget(v),
  );
```

## Predefined Width
For `useScreen` the property of predefined width has total of 6:
- base: < 568px
- xs: < 640px
- sm: < 720px
- md: < 920px
- lg: < 1024px
- xl: >= 1024px

If the property doesn't define, it will fall through fallback, for example.
```dart
n.Text..useScreen(
  context,
  base: (v) => v..color = Colors.red,
  xs: (v) => v..color = Colors.blue,
  md: (v) => v..color = Colors.blue,
);
```

When `sm` is not presented, the width under md will be fallback to `xs` then `base` in order.

## useQuery
If you're not satisfied with the predefined width, or have to go beyond just width, you can just `useQuery` which will return you a `MediaQueryData` for you to handle yourself.

```dart
n.Text..useQuery(
  context,
  (v, query) {
    // Do some checking with media query

    return v..color = Colors.red
  }
);

n.Box()
  ..useQuery((query) {
    // Do some checking with media query

    return n.Box()..bg = Colors.blue
  });
```

## useThemeSelector
Dark theme has become an essential part of app development, with Niku you can use `useThemeSelector` to handle the case.

It provide you the same syntax as `useScreen` but for dark mode and handle the rest of for diffing and applyment for you. 
```dart
n.Box()
  ..useThemeSelector(
    light: (v) => v..bg = Colors.white,
    dark: (v) => v..bg = Colors.grey.shade800,
  );
```

## useDarkMode
For more imperative approach of `useThemeSelector`, you can use `useDarkMode` which provide you with `isDark` like `useQuery` but for dark theme.

```dart
n.Box()
  ..useDarkMode((v, isDark) => v
    ..bg = isDark ? Colors.grey.shade800 : Colors.white);
```
