---
title: Use Parent
---
# Use Parent
Use to add parent nesting to the widget.

```dart
"Text".n
    ..color = Colors.blue
    ..useParent((v) => v
        ..p = 8
        ..rounded = 8
    );
```

However, if you're planning to add just 1-2 parents widget, you can just use `.n` prefix property which indicate that you're intent to the property to the parent.
```dart
"Text".n
    ..color = Colors.blue
    ..n.p = 8
    ..n.rounded = 8;
```

These two is does exactly the same thing, `.n` prefix is just a syntax sugar to the `useParent` hook.

## Best Practice
- Use `n` prefix if you're applying just 1-2 properties to parent
- Use `useParent` if you're applying multiple properties to parent