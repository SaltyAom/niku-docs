---
title: Use Theme Selector
---
# Use Theme Selector
A syntax sugar for `useQuery` but limited to detect `Platform Brightness` only.

Use to adapt property between light and dark mode:
```dart
"".n
    ..useThemeSelector(
        context,
        light: (v) => v..color = Colors.black,
        dark: (v) => v..color = Colors.white,
    );

n.Box()
    ..useThemeSelector(
        light: (v) => v..color = Colors.black,
        dark: (v) => v..color = Colors.white,
    );
```

## Best Practice
- If you want to get Media Query, then use [useQuery](/use-query) instead.
