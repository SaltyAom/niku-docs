---
title: Comparison to Styled Widget
---
# Comparison to Styled Widget
Niku and Styled Widget is almost the same.

Both provide you top-down styling widgets without nesting more parent.

The main difference between Niku and Styled Widget is that, Niku bothers re-implementing all other widgets to make it accepts cascade notation to make everything follows the same convention.

While Niku try to provide you to style all the widgets, `Styled Widget` only provide you: Parent, Icon, and Text.

## Code Comparison
From [Style Widget's "Japan Style" example](https://github.com/ReinBentdal/styled_widget/wiki/japan-style-example)

Styled Widget:
```dart
Column(
    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
    crossAxisAlignment: CrossAxisAlignment.center,
    children: <Widget>[
    Text('ウエルカム') // Vertical text
        .textColor(Color(0xff44517F))
        .fontSize(28)
        .bold()
        .width(20),
    Styled.widget() // red circle
        .backgroundColor(Color(0xffFF6160))
        .constrained(width: 200, height: 200)
        .clipOval()
        .gestures(
            onTap: () => showBottomSheet(
                context: context,
                backgroundColor: Colors.transparent,
                builder: (context) => BottomSheet(),
            ),
        ),
    ],
).padding(vertical: 80)
 .alignment(Alignment.topCenter);
```

Niku:
```dart
n.Column([
    'ウエルカム'.n // Vertical text
        ..color = Color(0xff44517F)
        ..fontSize = 28
        ..bold
        ..w = 20,
    n.Box() // red circle
        ..size = [200, 200]
        ..bg = Color(0xffFF6160)
        ..rounded
        ..on(
            tap: () => showBottomSheet(
                context: context,
                backgroundColor: Colors.transparent,
                builder: (context) => BottomSheet(),
            ),
        ),
])
    ..mainEvenly
    ..crossCenter
    ..py = 80
    ..alignTopCenter;
```

### Bottom Sheet
Styled Widget:
```dart
Column(
    mainAxisAlignment: MainAxisAlignment.end,
    crossAxisAlignment: CrossAxisAlignment.center,
    children: <Widget>[
    Text('サインアップ') // button
        .textColor(Colors.white)
        .fontSize(24)
        .padding(vertical: 15, horizontal: 30)
        .decorated(
            color: Color(0xff41508D),
            borderRadius: BorderRadius.circular(35),
        )
        .gestures(onTap: () => Navigator.pop(context)),
    Text('サインイン') // bottom description
        .fontSize(18)
        .textColor(Color(0xff455178))
        .padding(vertical: 30),
    ],
)
    .constrained(
        height: 280,
        width: MediaQuery.of(context).size.width,
    )
    .padding(all: 10)
    .backgroundBlur(20)
    .clipRect();
```

Niku:
```dart
n.Column([
    'サインアップ'.n // button
        ..color = Colors.white
        ..fontSize = 24
        ..mx = 30
        ..my = 15
        ..bg = Color(0xff41508D)
        ..n.rounded = 35
        ..on(tap: () => Navigator.pop(context)),
    'サインイン'.n // bottom description
        ..fontSize = 18
        ..color = Color(0xff455178)
        ..m = 30
])
    ..mainEnd
    ..crossCenter
    ..h = 280
    ..wFull
    ..p = 10
    ..n.bgBlur = 20
    ..n.rect;
```

## Comparison Matrix
For a clear comparison, here's a comparison matrix for you to decide.

| Feature            | Styled Widget        | Niku                        |
|--------------------|----------------------|-----------------------------|
| Convention         | Flutter              | Tailwind, SwiftUI, Flutter  |
| Composable widget  | Text, Icon, Parent   | 30+ and expanding           |
| Reusable Style     | ❌                   | ✅ with Stylesheet           |
| Responsive         | ❌                   | ✅ useQuery, useScreen       |
| Predefined Utility | Less                 | More                        |
| Automatic `build`  | ✅                   | ✅                           |
| Platform Selector  | ✅                   | ✅ with usePlatformSelector  |
| Transition         | Better               | More Verbose                 |
| Performance Tuning | ❌                   | ✅ Pseudo Constant           |
| Learning Curve     | Easier               | A bit harder                 |

## Side note
Before settle down with which library to use, I highly recommended you to try [Styled Widget](https://pub.dev/packages/styled_widget) first, because both library try to assist you with just the same thing but if you don't usually need to handle styling of "others" widget much, you most likely wants to go with Styled Widget.
