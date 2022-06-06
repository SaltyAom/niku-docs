import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'en-US',
    title: 'Niku',
    description:
        'Compose Flutter UI from utilities Widget and extensions with dot cascade. Fluently developing without headache and Nested Hell.',
    lastUpdated: true,
    themeConfig: {
        sidebar: [
            {
                text: 'Essential',
                collapsible: true,
                items: [
                    {
                        text: 'Introduction',
                        link: '/introduction'
                    },
                    {
                        text: 'Installation',
                        link: '/installation'
                    },
                    {
                        text: 'Widget Type',
                        link: '/widget-type'
                    },
                    {
                        text: 'Naming Convention',
                        link: '/naming-convention'
                    }
                ]
            },
            {
                text: 'Advance Concept',
                collapsible: true,
                items: [
                    {
                        text: 'Reusable  Style',
                        link: '/reusable-style'
                    },
                    {
                        text: 'Custom Property',
                        link: '/custom-property'
                    },
                    {
                        text: 'Custom Widget',
                        link: '/custom-widget'
                    },
                    {
                        text: 'Performance Tuning',
                        link: '/performance-tuning'
                    }
                ]
            },
            {
                text: 'Hooks',
                collapsible: true,
                items: [
                    {
                        "text": "Hooks",
                        "link": "/hooks"
                    },
                    {
                        "text": "Use Parent",
                        "link": "/use-parent"
                    },
                    {
                        "text": "Use Query",
                        "link": "/use-query"
                    },
                    {
                        "text": "Use Size",
                        "link": "/use-size"
                    },
                    {
                        "text": "Use Screen",
                        "link": "/use-screen"
                    },
                    {
                        "text": "Use Theme Selector",
                        "link": "/use-theme-selector"
                    },
                    {
                        "text": "Use Platform",
                        "link": "/use-platform"
                    },
                    {
                        "text": "Use Transition",
                        "link": "/use-transition"
                    },
                ]
            },
            {
                text: 'Widgets',
                collapsible: true,
                items: [
                    {
                        "text": "Alert",
                        "link": "/alert"
                    },
                    {
                        "text": "Button",
                        "link": "/button"
                    },
                    {
                        "text": "Checkbox",
                        "link": "/checkbox"
                    },
                    {
                        "text": "Checkbox List Tile",
                        "link": "/checkbox-list-tile"
                    },
                    {
                        "text": "Column",
                        "link": "/column"
                    },
                    {
                        "text": "Dismissible",
                        "link": "/dismissible"
                    },
                    {
                        "text": "Dropdown Button",
                        "link": "/dropdown-button"
                    },
                    {
                        "text": "Dropdown Button Form Field",
                        "link": "/dropdown-button-form-field"
                    },
                    {
                        "text": "Grid View",
                        "link": "/grid-view"
                    },
                    {
                        "text": "Icon",
                        "link": "/icon"
                    },
                    {
                        "text": "Icon Button",
                        "link": "/icon-button"
                    },
                    {
                        "text": "Image",
                        "link": "/image"
                    },
                    {
                        "text": "List Tile",
                        "link": "/list-tile"
                    },
                    {
                        "text": "List View",
                        "link": "/list-view"
                    },
                    // {
                    //     "text": "",
                    //     "link": "/"
                    // },
                ]
            }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/saltyaom/niku' }
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2021-present SaltyAom'
        },
        editLink: {
            repo: 'saltyaom/niku-doc',
            dir: 'docs',
            text: 'Edit this page on GitHub'
        }
    }
})
