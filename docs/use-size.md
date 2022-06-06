---
title: Use Size
---
# Use Size
A syntax sugar for `useQuery` but limited to screen size.
```dart
n.Box()
    ..h = 300
    ..useSize((v, size) {
        if(size.width <= 568)
            return v..wPercent = 90;

        return v..wPercent = 75;
    });
```

