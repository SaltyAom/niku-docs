import DefaultTheme from "vitepress/theme";

// @ts-expect-error
import Layout from "./layout.vue";

import "./custom.css";

export default {
	extends: DefaultTheme,
	Layout,
	enhanceApp({ app, router, siteData }) {
		// app is the Vue 3 app instance from `createApp()`.
		// router is VitePress' custom router. `siteData` is
		// a `ref` of current site-level metadata.
		// app.component('Prism', Prism)
	},
};
