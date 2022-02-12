---
layout: ../../layouts/doc.astro
prev: hook
next: what-next
title: Parent
---
Not only that Niku allows you to style widget with property builder, it also allows you to create nested widget with a property builder.

By wrapping your widget with `Niku` or `n.Box`, your widget become a parent builder.
```dart
Niku(
  Text("Hi")
)
  ..p = 20
  ..bg = Colors.red
  ..rounded
```

Which has an equivalent to this:
```dart
ClipRRect(
  borderRadius: BorderRadius.circular(9999)
  child: ColoredBox(
    color: Colors.red,
    child: Padding(
      padding: EdgeInsets.all(20),
      child: Text("Hi")
    ),
  ),
)
```

But you don't have to actually wrap your Widget with `Niku`, you can simply just call the `.niku` method and it would work just the same way.
```dart
Text("Hi")
  .niku
  ..p = 20
  ..bg = Colors.red
  ..rounded
```

## Hook
However, sometime you might working on dot cascade which doesn't support `.niku` transform.

You can use `useParent` hook which handle parent builder where widget transformation is not available.
```dart
n.Text("Hi")
  ..fontSize = 18
  ..color = Colors.red
  ..useParent((v) => v
    ..p = 20
    ..bg = Colors.red
    ..rounded
  )
```

## Custom Parent
`Niku` parent builder has a lot of shorten property builder, but sometime it might doesn't have what you need, when that time come, you can use `useChild` hook to add a custom widget yourself.

```dart
Niku()
  ..p = 20
  ..bg = Colors.red
  ..rounded
  ..useChild((child) => 
    MyWidget(child: child),
  )
```
