---
title: Image
---
# Image
A representation of [Imagery](https://material.io/design/communication/imagery.html).

`NikuImage` accepts all the props as same as [Image](https://api.flutter.dev/flutter/widgets/Image-class.html).

```dart
// Using namespace
n.Image.network("https://user-images.githubusercontent.com/35027979/172061535-4fc5b0b7-4c78-44ee-9549-40ada89ced74.gif")

// Using Niku Prefix
NikuImage.network("https://user-images.githubusercontent.com/35027979/172061535-4fc5b0b7-4c78-44ee-9549-40ada89ced74.gif)
```

## Example Usage
```dart
n.Image.assets("/assets/images/yae.jpg")
    ..cover
    ..rounded = 8;
```

### With progress indicator
```dart
n.Image.assets("assets/takodachi.png")
    ..cover
    ..useCircleProgress(
        color: Colors.blue,
    );
```

## Factory Method
Niku can accepts 4 factory method.

| Factory Method    | Equivalent Widget   |
|-------------------|---------------------|
| n.Image           | [Image](https://api.flutter.dev/flutter/widgets/Image-class.html) |
| n.Image.network   | [Image.network](https://api.flutter.dev/flutter/widgets/Image/Image.network.html) |
| n.Image.asset     | [Image.asset](https://api.flutter.dev/flutter/widgets/Image/Image.asset.html) |
| n.Image.memory    | [Image.memory](https://api.flutter.dev/flutter/widgets/Image/Image.memory.html) |

## Defination
[View Defination on pub.dev](https://pub.dev/documentation/niku/latest/widget_image/NikuImage-class.html)
