---
title: Use Screen
---
# Use Screen
A syntax sugar for `useSize` but with a predefined width for seperating screen size.

**Equivalent to TailwindCSS breakpoint.**

```dart
n.Box()
    ..h = 300
    ..useScreen(
        base: (v) => v..wPercent = 100,
        md: (v) => v..wPercent = 90,
        xl: (v) => v..wPercent = 75,
    );
```

If the property doesn’t define, it will fall through fallback, for example.

## Breakpoint
For `useScreen`, the accepts property is consists of 6.

| Breakpoint Name | Screen Size |
| --------------- |:-----------:|
| base            | < 568px     |
| xs              | < 640px     |
| sm              | < 720px     |
| md              | < 920px     |
| lg              | < 1024px    |
| xl              | >= 1024px   |
