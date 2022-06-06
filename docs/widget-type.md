---
title: Widget Type
---
# Widget Type

Niku styling layer is seperated into 2 types:
1. Property Styling
2. Parent Styling

## Property Styling
Is a property specific to the certain widget, a re-implemented widget in Niku.

For example, Text.

Niku provided you a version of `NikuText`, which allows you to style property tied to text using cascade notation.
```dart
import 'package:niku/niku.dart'; // <--- Import Widget

Text(
    "Native Text",
    style: TextStyle(
        color: Colors.blue,
    ),
);

NikuText("Niku Text")
    ..color = Colors.blue;
```

Niku Widget still accepts all the props similar to Flutter native widget, but can be composed with cascade notation with same naming with the native Widget.

Because of this, naming is specific to certain widget.
For example, you can use `color` with `NikuText` because `TextStyle` can accepts `color`, but if you use it with `Row`, or `Column` it wouldn't work because it doesn't exists
```dart
// ✅ Ok, because `TextStyle` accepts `color`
NikuText("Hello World")
    ..color = Colors.blue;

// ❌ Wrong, `Row` doesn't accept `color`
NikuRow([])
    ..color = Colors.blue
```

## Mixing property
Even if Niku widget is a re-implemented version, it still accepts the same props, and does the same thing as before.

In fact, you can just use `NikuText` and pass the same value as `Text` and expected it to work the same, or mixed both together would still works.
```dart
NikuText(
    "Native Text",
    style: TextStyle(
        color: Colors.blue,
    ),
)
    ..fontSize = 24;
```

You can think that Niku widget is just copy-paste version of widget with cascade notation available, that's all.

## Parent Styling
But what if you wants to style utilities property like `Padding`? would Niku re-implemented that in Niku Widget?

Actually, not.

Utility properties is handle with "Parent Styling", TLDR; wrapping any widget with `Niku` widget allows you to use parent styling.

Which means, you can use it on any widget not limited to Niku widget.
```dart
Niku(ThirdPartyWidget()) // Parent Builder
    ..mt = 20;  // margin
```

However, it might be redundant and introduce more bracket, to make it simple you can use `.niku` which will results the same thing.
```dart
ThirdPartyWidget()
    .niku       // Using Parent Builder
    ..mt = 20;  // margin
```

But using cascade notation, you can't transform the type, which is why Niku introduced you with `useParent` and `n` for Niku widget.
```dart
// ❌ Doesn't work with cascade notation
n.Text("Doesn't transform type")
    ..color = Colors.blue
    ..fontSize = 21;
    ..niku
    ..pt = 20;

// ⚠️ Working, but redundant for one widget
n.Text("Using useParent")
    ..color = Colors.blue
    ..fontSize = 21
    ..useParent((v) => v
        ..p = 20
    );

// ✅ Shorter
n.Text("Using useParent")
    ..color = Colors.blue
    ..fontSize = 21
    ..n.p = 20;
```

Because some property styling might have duplicated name with parent property, `useParent` ensure that you're intent to add the property to parent not child.
While `n.[property]` is just a syntax sugar for `useParent` for single property.

For example:
```dart
n.Button("A Button".n)
    ..p = 20    // Add to button
    ..n.p = 20  // Add to parent 
```

This ensure that no property is shadowed.

#### Note: For parent padding, instead of using `..n.p`, you can use `..m` instead, because Flutter implementation of margin is actually padding.

## Best practice:
- Use `n` if you're applying just one property to parent
- Use `useParent` if you're applying multiple properties to parent
