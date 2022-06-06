---
title: Grid View
---
# Grid View
A representation of [Layout Gtid](https://material.io/design/layout/responsive-layout-grid.html).

`NikuGridView` accepts all the props as same as [GridView](https://api.flutter.dev/flutter/widgets/GridView-class.html).

```dart
// Using namespace
n.GridView()
    .gridDelegate = delegate;

// Using Niku Prefix
NikuGridView()
    .gridDelegate = delegate;
```

## Example Usage
```dart
n.GridView.count()
    ..count = 3  // CrossAxisCount
    ..ratio = 1
    ..children = List.generate(
        items.length, 
        (index) => items[index].n,
    )
    ..mainAxisSpacing = 8
    ..crossAxisSpacing = 8;
```

### Using Builder
```dart
n.GridView.builder()
    ..delegate = const SliverGridDelegateWithMaxCrossAxisExtent(
        maxCrossAxisExtent: 200,
    )
    ..useItemBuilder((context, index) => value[index].n);
```

### Using children
```dart
n.GridView.count()
    ..delegate = const SliverGridDelegateWithMaxCrossAxisExtent(
        maxCrossAxisExtent: 200,
    )
    ..children = List.generate(
        items.length, 
        (index) => items[index].n,
    );
```


## Factory Method
Niku can accepts 6 factory method.

| Factory Method        | Equivalent Widget   |
|-----------------------|---------------------|
| n.GridView            | [GridView](https://api.flutter.dev/flutter/widgets/GridView/GridView.html)          |
| n.GridView.children   | - |
| n.GridView.builder    | [GridView.builder](https://api.flutter.dev/flutter/widgets/GridView/GridView.builder.html)      |
| n.GridView.count      | [GridView.count](https://api.flutter.dev/flutter/widgets/GridView/GridView.count.html) |
| n.GridView.custom     | [GridView.custom](https://api.flutter.dev/flutter/widgets/GridView/GridView.custom.html)      |
| n.GridView.extent    | [GridView.extend](https://api.flutter.dev/flutter/widgets/GridView/GridView.extent.html)  |

## Defination
[View Defination on pub.dev](https://pub.dev/documentation/niku/latest/widget_gridView/NikuGridView-class.html)
