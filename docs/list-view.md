---
title: List View
---
# List Tile
![List View demo](/widgets/list-view.png)

A representation of [Lists](https://material.io/components/lists).

`NikuListView` accepts all the props as same as [ListView](https://api.flutter.dev/flutter/material/ListView-class.html).

```dart
// Using namespace
n.ListView.children([]);

// Using Niku Prefix
NikuListView.children([]);
```

## Example Usage
```dart
n.ListView.children([
    "1".n,
    "2".n,
    "3".n,
]);
```

### Using Builder
```dart
n.ListView.builder()
    ..total = 100
    ..useItemBuilder(
      (context, index) => n.ListTile()
        ..title = n.Text(index.n)
        ..dense = true,
    );
```

### Using Separated
```dart
n.ListView.separated()
    ..total = 100
    ..useItemBuilder(
      (context, index) => n.ListTile()
        ..title = n.Text(index.n)
        ..subtitle = n.Text(index.n)
    )
    ..useSeparatorBuilder((context, index) => Divider(height: 1));
```

### ShrinkWrap
Use `shrinkWrap` when you are placing ListView inside dynamic height layout like `Scrollable`
```dart
n.Column([
    n.ListView.builder()
        ..total = 10
        ..useItemBuilder((context, index) => n.ListTile()
            ..title = n.Text(index.n)
        )
        ..shrinkWrap;
])
    ..scrollable;
``` 

## Factory Method
Niku can accepts 5 factory method.

| Factory Method       | Equivalent Widget   |
|----------------------|---------------------|
| n.ListView           | [ListView](https://api.flutter.dev/flutter/widgets/ListView-class.html) |
| n.ListView.children  | - |
| n.ListView.builder   | [ListView.builder](https://api.flutter.dev/flutter/widgets/ListView/ListView.builder.html) |
| n.ListView.separated | [ListView.separated](https://api.flutter.dev/flutter/widgets/ListView/ListView.separated.html) |
| n.ListView.custom    | [ListView.custom](https://api.flutter.dev/flutter/widgets/ListView/ListView.custom.html) |


## Defination
[View Defination on pub.dev](https://pub.dev/documentation/niku/latest/widget_listView/NikuListView-class.html)
