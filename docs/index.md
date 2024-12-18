---
title: Niku - Create Flutter UI, Easier, Faster, Smarter
layout: page
sidebar: false
---
<script setup>
    import Landing from '../components/landing.vue'
</script>

<Landing>

<template v-slot:hello>

```dart
"Hello Niku".n
    ..bold
    ..color = Colors.blue
    ..fontSize = 24;
```

</template>

<template v-slot:shortcut>

```dart
n.TextFormField("Value")
    ..asPassword
    ..outlined
    ..borderColor = Colors.blue;

n.Image.assets("takodachi.png")
    ..cover
    ..rounded = 8
    ..useCircleProgress(
        color: Colors.blue,
    );
```

</template>

<template v-slot:nested>

```dart
n.Box()
    ..w = 50
    ..h = 50
    ..p = 10 // padding
    ..bg = Colors.blue
    ..rounded = 8;
```

</template>

<template v-slot:style>

```dart
// Seperate from your main UI view
class Styles {
    static final title = "".n
        ..fontSize = 72
        ..color = Colors.black
        ..bold;
}

// Then main part of your app
"Reusable Style"..apply = Styles.title;
```

</template>

<template v-slot:install>

```yml [pubspec.yml]
dependencies:
    flutter:
        sdk: flutter

    niku: 2.4.2
```

</template>

</Landing>
