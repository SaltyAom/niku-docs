<script setup>
import "virtual:windi.css";
</script>

<style>
#heading {
	@apply flex justify-center w-full pt-14 bg-gray-50;
	height: 480px;
	background-image: radial-gradient(
			closest-side at center,
			transparent 30%,
			#f9fafb 100%
		),
		radial-gradient(closest-side at center, transparent 30%, #f9fafb 100%),
		radial-gradient(
			at 9% 67%,
			hsla(223, 100%, 65%, 0.14) 0px,
			transparent 50%
		),
		radial-gradient(
			at 22% 0%,
			hsla(210, 100%, 69%, 0.29) 0px,
			transparent 50%
		),
		radial-gradient(
			at 97% 49%,
			hsla(240, 100%, 87%, 0.35) 0px,
			transparent 50%
		),
		radial-gradient(
			at 100% 75%,
			hsla(280, 100%, 75%, 0.26) 0px,
			transparent 50%
		),
		radial-gradient(
			at 75% 100%,
			hsla(22, 100%, 77%, 0.19) 0px,
			transparent 50%
		),
		radial-gradient(
			at 40% 100%,
			hsla(240, 100%, 70%, 0.15) 0px,
			transparent 50%
		),
		radial-gradient(
			at 72% 0%,
			hsla(343, 100%, 76%, 0.17) 0px,
			transparent 50%
		);
}

html.dark #heading {
	background-color: #1f2937;
	background-image: radial-gradient(
			closest-side at center,
			transparent 35%,
			#1f2937 100%
		),
		radial-gradient(
			at 9% 67%,
			hsla(223, 100%, 65%, 0.14) 0px,
			transparent 50%
		),
		radial-gradient(
			at 22% 0%,
			hsla(210, 100%, 69%, 0.29) 0px,
			transparent 50%
		),
		radial-gradient(
			at 97% 49%,
			hsla(240, 100%, 87%, 0.35) 0px,
			transparent 50%
		),
		radial-gradient(
			at 100% 75%,
			hsla(280, 100%, 75%, 0.26) 0px,
			transparent 50%
		),
		radial-gradient(
			at 75% 100%,
			hsla(22, 100%, 77%, 0.19) 0px,
			transparent 50%
		),
		radial-gradient(
			at 40% 100%,
			hsla(240, 100%, 70%, 0.15) 0px,
			transparent 50%
		),
		radial-gradient(
			at 72% 0%,
			hsla(343, 100%, 76%, 0.17) 0px,
			transparent 50%
		);
}
</style>

<style lang="sass">
pre
    @apply p-4 my-0

@supports (background-clip: text) or (-webkit-background-clip: text)
    #heading > .wrapper > .title
        @apply from-sky-400 to-violet-400 bg-gradient-to-br text-transparent bg-clip-text
        background-clip: text
        -webkit-background-clip: text
        -webkit-text-fill-color: transparent

#heading, #offers, #why
    & > .wrapper
        @apply flex flex-col justify-center items-start md:items-center gap-2 w-full h-full max-w-4xl mx-auto px-6

        & > .title
            @apply text-gray-800 dark:text-gray-100 text-4xl md:text-6xl font-bold md:text-center mb-4
            line-height: 1.175em !important

        & > .sub-title
            @apply text-lg md:text-2xl text-gray-500 dark:text-gray-300 md:text-center

        & > .link
            @apply text-xl text-white font-semibold mt-8 px-12 py-3 rounded-xl bg-indigo-500 shadow-lg shadow-indigo-500/50 backdrop-blur-2xl transform hover:scale-105 transition-transform

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

    & > .language-dart, & > .language-yml
        @apply flex flex-1 !text-base rounded-lg bg-gray-50 dark:bg-gray-800 p-2 text-sm text-gray-500 dark:text-gray-300 !p-0

        & > .lang
            @apply hidden

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
				<h2 class="title">Fluently create UI in Flutter</h2>
				<h3 class="sub-title">
					Compose your UI with property builder with
					<u>cascade notation</u>.
				</h3>
				<h3 class="sub-title">Say goodbye to Nested Hell.</h3>
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

				<slot name="hello" />
			</section>

			<section class="card -reverse">
				<div class="content">
					<h3 class="title">Shorten and shortcut</h3>
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

				<slot name="shortcut" />
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
						With Niku, composing UI is simple, you use cascade
						notation to compose both properties and parent.
					</p>
				</div>

				<slot name="nested" />
			</section>

			<section class="card -reverse">
				<div class="content">
					<h3 class="title">Welcome to Reusable Style</h3>
					<p>
						Niku allows you to extract your styling out to anywhere
						of your code, then reuse it on any widgets.
					</p>
					<p>
						Without complex styling, helping you to focus on
						functionality of your apps instead.
					</p>
				</div>

				<slot name="style" />
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

				<slot name="install" />
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
						class="px-12 py-3 text-blue-500 dark:text-blue-400 font-semibold text-xl bg-blue-100/50 dark:bg-blue-700/25 rounded-xl mt-6"
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
