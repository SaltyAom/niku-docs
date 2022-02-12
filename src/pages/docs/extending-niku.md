---
layout: ../../layouts/doc.astro
prev: what-next
next: custom-widget
title: Extending Niku
---
If predefined Niku property doesn't have what you looking for and you want to extends your Niku widget, you do that with `extension` method.

To create new shorten method, simply extend NikuWidget.
```dart
// Your plugin
extension MyShortenProperties on NikuText {
  void get redText {
    color = Colors.red;
  }

  void set customColor(Color newColor) {
    color = newColor
  }
}

// Then use it
NikuText()
  ..redText
  ..customColor(Colors.blue)
```
This will create new method for property builder for you to use.

## Parent
You can extends any Niku Widget even the parent property builder as the same way as Niku Widget by extending `Niku` widget.
```dart
extension MyCustomParentWidget on Niku {
  void get myWidget {
    widget = MyWidget(child: widget);
  }
}

// Then
NikuText()
  ..useParent((v) => v..myWidget)
```
