---
layout: ../../layouts/doc.astro
prev: use-query
next: adaptive
title: useTransition
---
Ever want to animate property from one to another without hassle? Then you might want to use useTransition!

With use transition, Niku will auto animate property you provided from previous to new.
So you don't have to manually create an `AnimationController` or wrap widget tree in `StatefulWidget`

Simply add `useTransition`, and provide property you want to animate.
```dart
n.Box()
    ..size = [100, 100]
    ..useTransition<Color>(
        value: toggle.value ? Colors.red.shade500 : Colors.blue.shade500,
        builder: (child, value) => child..bg = value,
    )
```

Niku will auto animate between these 2 color back and forth by itself.
The child property is remain unchanged to perserve the performance as same as normal AnimationBuilder did.

And yes, you can add `Duration`, and `Curves` as expected.
```dart
n.Box()
    ..size = [100, 100]
    ..useTransition<Color>(
        value: toggle.value ? Colors.red.shade500 : Colors.blue.shade500,
        builder: (child, value) => child..bg = value,
        duration: Duration(milliseconds: 400),
        curve: Curves.easeIn,
    )
```

Multiple `useTransition` to handle multiple value
```dart
n.Box()
    ..size = [100, 100]
    ..useTransition<Color>(
        value: toggle.value ? Colors.red.shade500 : Colors.blue.shade500,
        builder: (child, value) => child..bg = value,
        duration: Duration(milliseconds: 400),
    )
    ..useTransition<double>(
        value: toggle.value ? 40.0 : 8.0,
        builder: (v, value) => v..rounded = value,
        curve: Curves.easeIn,
    ),
```

## Multiple Transition value
There's also a way to animate multiple transition value in on go.

By using `useTransitions` (notice the 's'), which accepts the array of value to animate.
```dart
n.Box()
    ..size = [100, 100]
    ..useTransitions(
        dependencies: [
            toggle.value ? Colors.red : Colors.blue,
            toggle.value ? 40.0 : 8.0,
        ],
        curve: Curves.easeOut,
        builder: (child, deps) => child
            ..bg = deps[0]
            ..rounded = deps[1],
    ),
```
