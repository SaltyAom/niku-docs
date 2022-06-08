<script setup>
import 'virtual:windi.css'

import Prism from 'vue-prism-component'
import './onelight.css'

import 'prismjs/components/prism-dart'
import 'prismjs/components/prism-yaml'
</script>

<style>
#heading {
    @apply flex justify-center w-full pt-14;
    height: 640px;
    background-image: #ffffff;
    background-image: radial-gradient(
            at 40% 20%,
            hsla(28, 100%, 74%, 0.2) 0,
            transparent 50%
        ),
        radial-gradient(at 80% 0%, hsla(189, 100%, 56%, 0.2) 0, transparent 50%),
        radial-gradient(at 0% 50%, hsla(355, 85%, 93%, 0.2) 0, transparent 50%),
        radial-gradient(
            at 80% 50%,
            hsla(340, 100%, 76%, 0.2) 0,
            transparent 100%
        ),
        radial-gradient(at 0% 100%, hsla(22, 100%, 77%, 0.2) 0, transparent 50%),
        radial-gradient(
            at 80% 100%,
            hsla(195, 100%, 43%, 0.4) 0,
            transparent 50%
        ),
        radial-gradient(at 0% 0%, hsla(343, 100%, 76%, 0.2) 0, transparent 50%);
}
</style>

<style lang="sass">
pre
    @apply p-4 my-0

#heading, #offers, #why
    & > .wrapper
        @apply flex flex-col justify-center items-start md:items-center gap-2 w-full h-full max-w-4xl mx-auto px-8

        & > .title
            @apply text-gray-800 dark:text-gray-100 text-4xl md:text-6xl font-bold md:text-center mb-4
            line-height: 1.375em

        & > .sub-title
            @apply text-lg md:text-2xl text-gray-500 dark:text-gray-300 md:text-center

        & > .link
            @apply text-xl text-gray-700 font-semibold mt-8 px-9 py-3 rounded-lg border border-solid border-gray-400 backdrop-blur-2xl
            @apply dark:text-gray-300 dark:border-gray-400

#why
    @apply bg-white rounded-xl

#offers, #why
    @apply w-full max-w-5xl py-12

    & > .wrapper
        & > .title
            @apply text-3xl md:text-4xl

        & > .sub-title
            @apply text-lg md:text-xl

.card
    @apply flex flex-col md:flex-row items-center max-w-5xl w-full rounded-2xl bg-white md:p-12 gap-4 md:gap-12 overflow-hidden
    @apply dark:bg-gray-700

    &.-reverse
        @apply md:flex-row-reverse

    & > pre
        @apply m-0

    & > a
        & > h4
            @apply font-semibold dark:text-gray-100

        & > p
            @apply dark:text-gray-300

    & > .content
        @apply flex flex-1 flex-col gap-4 text-lg text-gray-600 p-6 pb-0 md:py-0 md:px-2 md:px-0
        @apply dark:text-gray-300

        & > .title
            @apply text-3xl font-semibold text-gray-800
            @apply dark:text-gray-100

#summarize
    @apply flex flex-col justify-center items-center gap-4 w-full max-w-5xl text-gray-500 text-xl rounded-2xl bg-white md:p-8
    @apply dark:bg-gray-700 dark:text-gray-300

    & > h1
        @apply pt-6 dark:text-gray-100

    & > picture > figcaption
        @apply pt-2 pb-4 md:pb-0

    & > h1,
    & > p,
    & > picture > figcaption
        @apply px-6
        @apply dark:text-gray-300

.VPNavBar > .container > .content
    background-color: unset
    border-bottom: unset
</style>

<template>
    <div>
        <header id="heading">
            <div class="wrapper">
                <h2 class="title">
                    Create Flutter UI,<br />Easier, Faster, Smarter
                </h2>
                <h3 class="sub-title">
                    Compose Flutter UI from utilies Widget and extensions with
                    <u>dot cascade</u>.
                </h3>
                <h3 class="sub-title">
                    Fluently developing without headache and Nested Hell.
                </h3>
                <a class="link" href="/introduction">Getting Start</a>
            </div>
        </header>
        <main
            class="flex flex-col items-center w-full px-4 gap-12 py-16 bg-gray-50 dark:bg-gray-800"
        >
            <section class="card">
                <div class="content">
                    <h3 class="title">Styling with ease, effortlessly</h3>
                    <p>
                        No more complex object, Niku offers composing both
                        properties and parent directly without adding another
                        layer of complexity.
                    </p>
                    <p>
                        Helping you focus on widget itself, no more redundant
                        properties as a widget.
                    </p>
                </div>

                <Prism class="flex-1 w-full" language="dart">
                    {{
                        `"Hello Niku".n
    ..bold
    ..color = Colors.blue
    ..fontSize = 24`
                    }}
                </Prism>
            </section>

            <section class="card -reverse">
                <div class="content">
                    <h3 class="title">Shorten and shortcut property</h3>
                    <p>
                        Reduce redundant boilerplate code from your codebase,
                        Niku cover many a lot of common pattern code normally
                        found in Flutter app.
                    </p>
                    <p>
                        Shorten your code, maintain your sanity. No more
                        confusing complex basic pattern.
                    </p>
                </div>
                <Prism class="flex-1 w-full" language="dart">
                    {{
                        `n.TextFormField("Value")
    ..asPassword
    ..outlined
    ..borderColor = Colors.blue;

n.Image.assets("img/takodachi.png")
    ..cover
    ..useCircleProgress(
        color: Colors.blue
    );
);`
                    }}
                </Prism>
            </section>

            <section class="card">
                <div class="content">
                    <h3 class="title">Says goodbye to Nested-Hell</h3>
                    <p>
                        Nested Hell have been a problem for Flutter for a long
                        time. It's undeniable that it's hard to read and
                        maintain and nobody like that.
                    </p>
                    <p>
                        With Niku, composing UI is simple, you use dot cascade
                        to compose both properties and parent.
                    </p>
                </div>
                <Prism class="flex-1 w-full" language="dart">
                    {{
                        `n.Box()
    ..w = 50
    ..h = 50
    ..p = 10 // padding 
    ..bg = Colors.blue
    ..rounded = 8;`
                    }}
                </Prism>
            </section>

            <section class="card -reverse">
                <div class="content">
                    <h3 class="title">And says hello to Reusable Style</h3>
                    <p>
                        Niku allows you to extract your styling out to anywhere
                        of your code, then reuse it on any widgets.
                    </p>
                    <p>
                        Without complex styling, helping you to focus on
                        functionality of your apps instead.
                    </p>
                </div>
                <Prism class="flex-1 w-full" language="dart">
                    {{
                        `// Seperate from your main UI view 
class Styles {
    static final title = "".n
        ..fontSize = 72
        ..color = Colors.black
        ..bold;
} 
        
// Then main part of your app 
"Reusable Style"..apply = Styles.title;`
                    }}
                </Prism>
            </section>

            <summary id="summarize">
                <h1 class="text-black text-4xl sm:text-5xl font-bold">TLDR;</h1>
                <p>
                    Niku helps you compose your UI declaratively, without
                    headache.
                </p>
                <picture>
                    <source type="image/webp" srcset="/assets/drake.webp" />
                    <img
                        src="/assets/drake.jpg"
                        loading="lazy"
                        alt="Korone Drake"
                        title="Korone Drake Format"
                        class="w-full max-w-3xl"
                    />
                    <figcaption
                        class="text-sm text-center text-gray-400 font-light"
                    >
                        Traditional Flutter vs Niku visualize with Korone Drake
                        format
                    </figcaption>
                </picture>
            </summary>

            <section class="card">
                <div class="content">
                    <h3 class="title">How to get start?</h3>
                    <p>Just add niku to pubspec.yaml and that's it!</p>
                    <p>
                        Just one line of code away form you to the future of
                        better of experience of developing Flutter apps.
                    </p>
                </div>
                <Prism class="flex-1 w-full" lang="yaml">
                    {{
                        `# pubspec.yaml
dependencies: 
    flutter: 
        sdk: flutter 
    
    niku: 2.3.0-experimental.4`
                    }}
                </Prism>
            </section>

            <section class="card -reverse">
                <div class="content">
                    <h3 class="title">Still not convinced?</h3>
                    <p>
                        Not sure why Niku is created or how does Niku fits to
                        your codebase?
                    </p>
                    <p>
                        There's an article written by the creator of Niku
                        explaining the behind the scene, thought process, design
                        decision, and why Niku is created in the first place.
                    </p>
                </div>
                <a
                    class="flex flex-col flex-1 gap-1 p-4 lg:p-0"
                    href="https://medium.com/@saltyaom/niku-thought-process-of-designing-a-balance-framework-1d9218fcdabd"
                    target="_blank"
                    title="Read 'Niku: Thought Process of Designing a Balance Framework'"
                >
                    <picture>
                        <source
                            type="image/webp"
                            srcset="/assets/article.webp"
                        />
                        <img
                            src="/assets/article.jpg"
                            alt="Probably some anime writing some code"
                            loading="lazy"
                            class="w-full max-w-3xl mb-1 rounded shadow-xl"
                        />
                    </picture>
                    <h4 class="text-lg">
                        Thought Process of Designing a Balance Framework
                    </h4>
                    <p class="text-gray-500 text-sm font-light">
                        Behind the scene, why I created it and how I balancing
                        DX and performance
                    </p>
                </a>
            </section>

            <section id="offers">
                <div class="wrapper">
                    <h2 class="title">Build better apps together</h2>
                    <h3 class="sub-title">
                        Flutter without effortlessly styling, reusable
                        stylesheet, elimating Nested Hell.
                    </h3>
                    <h3 class="sub-title">
                        Join communities of developer building better Flutter
                        apps.
                    </h3>
                    <a
                        class="px-9 py-3 text-blue-500 dark:text-blue-400 font-semibold text-xl bg-blue-100/50 dark:bg-blue-700/25 rounded-lg mt-6"
                        href="/introduction"
                    >
                        Quickstart
                    </a>
                </div>
            </section>
            <footer class="text-gray-400 mt-8">
                &copy; Provide to you by
                <a href="https://github.com/saltyaom">saltyAom</a>
            </footer>
        </main>
    </div>
</template>
