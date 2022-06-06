---
title: Hooks
---
# Hooks
A function which will accept parameter and does something.

Hook will almost always have the use prefix, which indicate it as a function.

Hook is separated to 2 types:
- Property Hook
- Utility Hook

You can also think that property hook is property styling while utility hook is a parent styling.

| Certain Widget   | All Widget     |
| ---------------- |:--------------:|
| Property Styling | Parent Styling |
| Property Hook    | Utility Hook   |

## Property Hooks
A hook which only available for certain Niku widget.

These kind of hook is use for applying property to specific widget, purely for reducing boilerplate.

For example, `NikuButton` have `useBg` for accepting parameters for each state.
```dart
// ✅ Available for NikuButton
n.Button("".n)
    ..useBg(
        base: base,
        disabled: disabled,
        dragged: dragged,
        error: error,
        focused: focused,
        hovered: hovered,
        pressed: pressed,
        scrolledUnder: scrolledUnder,
        selected: selected,
    );

// ❌ Not available for NikuText
"".n
    ..useBg(
        pressed: pressed,
        scrolledUnder: scrolledUnder,
    );
```

## Utility Hook
A hook for utility purpose, available for all widget.

This hook work almost the same as parent hook but for conditional checking, adapting property base on the situtation.

For example, `useThemeSelector` which adapts the property base on light or dark theme:
```dart
n.Box()
    ..useThemeSelector(
        light: (v) => v..bg = Colors.white,
        dark: (v) => v..bg = Colors.black,
    );
```

Utility Hooks is consists of:
- useParent
- useQuery
- useSize
- useScreen
- useDarkMode (deprecated in favor of `useThemeSelector`)
- useThemeSelector
- usePlatform
- useTransition

## When to pass contex
For Utility hooks is available for both Niku Widget and Parent Widget.

Adding target to Niku Widget would require a `BuildContext` to be pass through.
While adding it to parent doesn't require one.

```dart
"".n
    ..useQuery(
        context,
        (v, query) => v..color = Colors.red
    );

n.Box()
    ..useQuery((v, query) => ..bg = Colors.blue);
```

This is because, BuildContext on Niku widget is treat as property styling which need a `BuildContext` for building correctly.
