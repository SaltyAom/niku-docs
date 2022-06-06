# Custom Property
If predefined Niku property doesn’t have what you looking, you can add one yourself.

Niku widget can be extended with `extension`.

## Property Styling
To create new shorten method, simply extend NikuWidget.
```dart
// Your plugin
extension MyShortenProperties on NikuText {
  void get redText => color = Colors.red;

  set customColor(Color color) => color = color;
}

// Then use it
NikuText()
  ..redText
  ..customColor(Colors.blue)
```

This will create new method for property builder for you to use.

## Parent
You can create new parent property by extending `Niku` and `NikuExplictParentBuilder`.

```dart
extension ApplyToUseParent on Niku {
    void get redBg => _add((w) => ColoredBox(
        color: Colors.red,
        child: w,
    ));
}

extension ApplyToN on NikuExplictParentBuilder {
    void get redBg => _add((w) => ColoredBox(
        color: Colors.red,
        child: w,
    ));
}

// From ApplyToUseParent
n.Box()
    ..useParent((v) => v..redBg);

// From ApplyToN
n.Box()
    ..n.redBg;
```

By using `_add`, Niku will add your widget to build queue and optimized it.
