const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
    purge: {
        preserveHtmlElements: false,
        content: ['src/**/*.[j|t]s[x]']
    },
    darkMode: 'class',
    theme: {
        extend: {
            screens: {
                light: { raw: '(prefers-color-scheme: light)' },
                dark: { raw: '(prefers-color-scheme: dark)' }
            },
            colors: {
                ...colors,
                primary: {
                    DEFAULT: '#007aff'
                },
                preload: {
                    DEFAULT: '#f3f4f6',
                    dark: '#313131'
                },
                system: {
                    DEFAULT: '#ffffff',
                    dark: '#212121'
                }
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/forms')
    ]
}
