import { defineConfig } from 'vitepress'

import WindiCSS from 'vite-plugin-windicss'

import { join } from 'path'

export default defineConfig({
    lang: 'en-US',
    title: 'Niku',
    description:
        'Compose Flutter UI from utilities Widget and extensions with dot cascade. Fluently developing without headache and Nested Hell.',
    lastUpdated: true,
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⾁</text></svg>'
            }
        ],
        [
            'meta',
            {
                property: 'og:image',
                content: 'https://niku.saltyaom.com/assets/og.jpg'
            }
        ],
        [
            'meta',
            {
                property: 'og:image:width',
                content: '1920'
            }
        ],
        [
            'meta',
            {
                property: 'og:image',
                content: '1080'
            }
        ]

    ],
    themeConfig: {
        nav: [
            {
                text: 'Quickstart',
                link: '/introduction'
            },
            {
                text: 'Changelog',
                link: 'https://github.com/SaltyAom/niku/releases'
            }
        ],
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
                        text: 'Hooks',
                        link: '/hooks'
                    },
                    {
                        text: 'Use Parent',
                        link: '/use-parent'
                    },
                    {
                        text: 'Use Query',
                        link: '/use-query'
                    },
                    {
                        text: 'Use Size',
                        link: '/use-size'
                    },
                    {
                        text: 'Use Screen',
                        link: '/use-screen'
                    },
                    {
                        text: 'Use Theme Selector',
                        link: '/use-theme-selector'
                    },
                    {
                        text: 'Use Platform',
                        link: '/use-platform'
                    },
                    {
                        text: 'Use Transition',
                        link: '/use-transition'
                    }
                ]
            },
            {
                text: 'Widgets',
                collapsible: true,
                items: [
                    {
                        text: 'Alert',
                        link: '/alert'
                    },
                    {
                        text: 'Button',
                        link: '/button'
                    },
                    {
                        text: 'Checkbox',
                        link: '/checkbox'
                    },
                    {
                        text: 'Checkbox List Tile',
                        link: '/checkbox-list-tile'
                    },
                    {
                        text: 'Column',
                        link: '/column'
                    },
                    {
                        text: 'Dismissible',
                        link: '/dismissible'
                    },
                    {
                        text: 'Dropdown Button',
                        link: '/dropdown-button'
                    },
                    {
                        text: 'Dropdown Button Form Field',
                        link: '/dropdown-button-form-field'
                    },
                    {
                        text: 'Grid View',
                        link: '/grid-view'
                    },
                    {
                        text: 'Icon',
                        link: '/icon'
                    },
                    {
                        text: 'Icon Button',
                        link: '/icon-button'
                    },
                    {
                        text: 'Image',
                        link: '/image'
                    },
                    {
                        text: 'List Tile',
                        link: '/list-tile'
                    },
                    {
                        text: 'List View',
                        link: '/list-view'
                    },
                    {
                        text: 'Radio',
                        link: '/radio'
                    },
                    {
                        text: 'Radio List Tile',
                        link: '/radio-list-tile'
                    },
                    {
                        text: 'Range Slider',
                        link: '/range-slider'
                    },
                    {
                        text: 'Rich Text',
                        link: '/rich-text'
                    },
                    {
                        text: 'Row',
                        link: '/row'
                    },
                    {
                        text: 'Selectable Text',
                        link: '/selectable-text'
                    },
                    {
                        text: 'Slider',
                        link: '/slider'
                    },
                    {
                        text: 'Stack',
                        link: '/stack'
                    },
                    {
                        text: 'Switch',
                        link: '/switch'
                    },
                    {
                        text: 'Text',
                        link: '/text'
                    },
                    {
                        text: 'Text Form Field',
                        link: '/text-form-field'
                    },
                    {
                        text: 'Text Span',
                        link: '/text-span'
                    },
                    {
                        text: 'Wrap',
                        link: '/wrap'
                    }
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
        editLink: {
            repo: 'saltyaom/niku-doc',
            dir: 'docs',
            text: 'Edit this page on GitHub'
        }
    },
    vite: {
        plugins: [
            WindiCSS({
                config: join(__dirname, '../../windi.config.ts')
            })
        ]
    }
})
