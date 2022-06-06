---
title: Use Platform
---
# Use Platform
A syntax sugar for detecting platform to adapt property into.
```dart
"Hello".n
    ..usePlatform(
        context,
        iOS: (a) => a..color = Colors.red,
        android: (a) => a..color = Colors.blue,
    );

n.Box()    
    ..usePlatform(
        iOS: (a) => a..color = Colors.red,
        android: (a) => a..color = Colors.blue,
    );
```

## Support Platform
- android
- iOS
- fuchsia
- linux
- macOS
- windows
- web
