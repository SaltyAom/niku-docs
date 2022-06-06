---
title: Alert
---
# Alert
A representation of [Dialog](https://material.io/components/dialogs).

`NikuAlert` accepts all the props as same as [AlertDialog](https://api.flutter.dev/flutter/material/AlertDialog-class.html).

To be use with [showNikuDialog](https://pub.dev/documentation/niku/latest/widget_alert/showNikuDialog.html) or [n.showDialog](https://pub.dev/documentation/niku/latest/widget_alert/showNikuDialog.html).

```dart
// Using namespace
n.Alert();

// Using Niku Prefix
NikuAlert();
```

## Example Usage
```dart
final alert = n.Alert()
    ..title = Text("Session Expired")
    ..content = Text("Your session have been expired, please sign in again")
    ..actions = [
        n.Button("Ok".n)
            ..onPressed = showSignInPage,
    ];

n.showDialog(
    context: context,
    builder: (context) => alert,
    barrierDismissible: false,
);
```

### Adaptive Alert
Niku Alert can show native alert dialog instead for each platform (iOS, Android) by adding `.adaptive`
```dart
final alert = n.Alert.adaptive()
    ..title = Text("Delete 1 photo")
    ..content = Text("Are you sure to delete 1 photo?")
    ..actions = [
        n.Button("Delete".n)
            ..onPressed = closeDialog
            ..color = Colors.red,
        n.Button("Cancel".n)
            ..onPressed = closeDialog
            ..bold,
    ];

n.showDialog(
    context: context,
    builder: (context) => alert
);
```


## Factory Method
Niku can accepts 3 factory method.

| Factory Method        | Equivalent Widget   |
|-----------------------|---------------------|
| n.Alert           | [AlertDialog](https://api.flutter.dev/flutter/material/AlertDialog-class.html) |
| n.Alert.cupertino | [CupertinoAlertDialog](https://api.flutter.dev/flutter/cupertino/CupertinoAlertDialog-class.html) |
| n.Alert.adaptive  | -      |

## Defination
[View Defination on pub.dev](https://pub.dev/documentation/niku/latest/widget_alert/widget_alert-library.html)
