---
layout: ../../layouts/doc.astro
prev: repaint
title: useQuery
---
Niku have some utilities method which helps you in cross platform environment where you need to adapt your UI to adapt to screen size, dark mode and etc.

You can use `useScreen` utilities which present on both property and parent builder.
```dart
n.Text("")
  .useScreen(context, (widget, size) => 
    widget..fontSize = size.width > 568
      ? 72
      : 48
  );

n.Box()
  ..useScreen((widget, size) =>
    size.widget > 568
      ? BigScreenWidget(widget)
      : SmallScreenWidget(widget)
  );
```
##### Note: screen utilities require BuildContext, however parent builder use the `Builder` widget under the hood so you don't have to manually pass widget there, but for property builder, you will required to manually pass BuildContext.

Or you can use the predefined `useQuery` which has the predefined `width` to handle.
```dart
n.Text..useQuery(
  context,
  base: (v) => v..color = Colors.red,
  xs: (v) => v..color = Colors.blue,
);

n.Box()
  ..useQuery(
    base: (v) => SmallScreenWidget(v),
    xs: (v) => ALittleBigBiggerWidget(v),
    md: (v) => BigScreenWidget(v),
  );
```

## Predefined Width
For `useQuery` the property of predefined width has total of 6:
- base: < 568px
- xs: < 640px
- sm: < 720px
- md: < 920px
- lg: < 1024px
- xl: >= 1024px

If the property doesn't define, it will fall through fallback, for example.
```dart
n.Text..useQuery(
  context,
  base: (v) => v..color = Colors.red,
  xs: (v) => v..color = Colors.blue,
  md: (v) => v..color = Colors.blue,
);
```

When `sm` is not presented, the width under md will be fallback to `xs` then `base` in order.
