---
title: Use Query
---
# Use Query
Use to adapt styling property to `MediaQuery`.

```dart
"".n
    ..useQuery(
        context,
        (v, query) => v..color = Colors.red
    );

n.Box()
    ..useQuery((v, query) => ..bg = Colors.blue);
```

This will adapt the style to Query you conditional return.
```dart
n.Box()
    ..size = [100, 100]
    ..useQuery((v, query) {
        if(query.platformBrightness == Brightness.dark)
            return v..bg = Colors.gray.shade700
        else
            return v..bg = Colors.gray.shade100
    });
```

## Best Practice
- If you want to get device theme, then use [useThemeSelector](/use-theme-selector) instead.
- If you're trying to get device screen size, then use [useSize](/use-size) instead.
- If you want to use predefined screen size, then use [useScreen](/use-screen) instead.
- If you're detecting platform specific UI, then use [usePlatform](/use-platform) instead.
