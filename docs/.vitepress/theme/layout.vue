<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import { nextTick, provide, ref } from "vue";

import { useData } from "vitepress";

const { isDark: darkTheme } = useData();

const enableTransitions = () =>
	"startViewTransition" in document &&
	window.matchMedia("(prefers-reduced-motion: no-preference)").matches;

provide("toggle-appearance", async ({ clientX: x, clientY: y }: MouseEvent) => {
	if (!enableTransitions() || !window?.localStorage) {
		darkTheme.value = !darkTheme.value;
		return;
	}

	const lastSwitch = window.localStorage.getItem("theme-switch");
	if (lastSwitch !== null && !isNaN(+lastSwitch)) {
		const lastSwitchTime = +lastSwitch;

		if (Date.now() - lastSwitchTime > 3 * 60 * 1000) {
			if (document.documentElement.classList.contains("-animated"))
				document.documentElement.classList.remove("-animated");
		} else {
			document.documentElement.classList.add("-animated");
		}
	}

	window.localStorage.setItem("theme-switch", Date.now().toString());

	if (document.startViewTransition !== undefined)
		await document.startViewTransition(async () => {
			darkTheme.value = !darkTheme.value;
			await nextTick();
		}).ready;
});
</script>

<template>
	<link
		rel="preload"
		as="image"
		href="/assets/moechakkafire.webp"
		fetchpriority="low"
	/>
	<DefaultTheme.Layout />
</template>

<style>
:root {
	--switch-duration: 1.75s;
	--switch-name: scale;
}

.-animated {
	--switch-duration: 1s;
	--switch-name: scale-fast;
}

/* ::view-transition-old(root),
::view-transition-new(root) {
    animation: none;
    mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
    z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
    z-index: 9999;
} */

::view-transition-group(root) {
	animation-timing-function: cubic-bezier(0.7, 0, 0.84, 0);
	z-index: 100;
}

::view-transition-new(root) {
	mask: url("/assets/moechakkafire.webp") center / 0 no-repeat;
	animation: var(--switch-name) var(--switch-duration);
}

::view-transition-old(root),
.dark::view-transition-old(root) {
	animation: var(--switch-name) var(--switch-duration);
}

@keyframes scale {
	0% {
		mask-size: 0;
	}
	10% {
		mask-size: 60vmax;
	}
	90% {
		mask-size: 60vmax;
	}
	100% {
		mask-size: 2000vmax;
	}
}

@keyframes scale-fast {
	0% {
		mask-size: 0;
	}
	10% {
		mask-size: 60vmax;
	}
	80% {
		mask-size: 60vmax;
	}
	100% {
		mask-size: 2000vmax;
	}
}

.VPSwitchAppearance {
	width: 22px !important;
}

.VPSwitchAppearance .check {
	transform: none !important;
}
</style>
