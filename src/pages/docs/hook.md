---
layout: ../../layouts/doc.astro
title: Hook
setup: |
    import { Prism } from 'astro/components';
---
In Flutter, there's some complex styling that require you to add a class as a parameter.

Consider looking at the `TextFormField` which require `InputDecoration`.
```dart
TextFormField(
  style: const TextStyle(
    fontSize: 16,
    color: Colors.red,
  ),
  decoration: const InputDecoration(
    icon: Icon(Icons.person),
    labelText: 'Label',
  ),
)
```

This is a complex process if all the property it flatten, some might have a duplicated name.

To prevent this is Niku, the complex class is re-created with prefixed `Niku` class like a widget and use property builder like normal widget.
```dart
n.TextFormField(
  "Label",
  style: n.TextStyle()
    ..fontSize = 16
    ..color = Colors.red,
  decoration: n.InputDecoration()
    ..icon = Icon(Icons.person)
)
```

## Problem with dot cascade
These class is accepted on every Niku classes so you can reuse these classes everywhere.

Passing these style builder as a props looks fine, however when you are passing as property builder it just doesn't work.
```dart
n.TextFormField("Label")
  ..style = n.TextStyle()
    ..fontSize = 16
    ..color = Colors.red,
  ..decoration = n.InputDecoration()
    ..icon = Icon(Icons.person)
)
```

Dot cascade confused with which style should be actually applied to leading to unexpected behavior of not styling the `n.TextStyle` and `n.InputDecoration`.

To resolve this problem, you have to explictly wrap your widget between each cascade.
```dart
n.TextFormField("Label")
  ..style = (n.TextStyle()
    ..fontSize = 16
    ..color = Colors.red),
  ..decoration = (n.InputDecoration()
    ..icon = Icon(Icons.person))
)
```

This makes the styling inconvenient and looks confusing.

To solve this, Niku introduce `Hooks`.

## What is hooks
In Niku, hook is a property builder as a reference bridge, accepting a function which argument is passed by an internal process allowing you to transform the value by returning it. 
```dart
n.TextFormField("Label")
  ..useTextStyle((v) => v
    ..fontSize = 16
    ..color = Colors.red),
  ..useDecoration((v) => v
    ..icon = Icon(Icons.person))
)
```

To put it simply, it's a property that receive a callback function that recieve something then you style it and return.
The returned value will be used to style the widget.

The naming convention is that any property start with `use` is a hook, and it will always recieve a callback function with a value, the accepted value and a purpose is based on it's name.
