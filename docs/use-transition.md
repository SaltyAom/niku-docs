---
title: Use Transition
---
# Use Transition
Auto animate transition between new state.

A syntax sugar for handling transition between state automatically.

```dart
n.Box()
    ..size = [100, 100]
    ..onPressed = randomizeColor
    ..useTransition<Color>(
        value: color,
        builder: (child, value) => child..bg = value,
    );
```

## Duration and Curve
However, you can also add some customization with `Duration` and `Curve` too.

```dart
n.Box()
    ..size = [100, 100]
    ..onPressed = randomizeColor
    ..useTransition<Color>(
        value: color,
        builder: (child, value) => child..bg = value,
        // Optional
        duration: Duration(milliseconds: 200),
        // Optional
        curves: Curves.linear,
    );
```

By default:
- Duration  - `200ms`
- Curves    - `Curves.linear`