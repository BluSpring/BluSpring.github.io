// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        '~/assets/css/index.css',
        '~/assets/css/all.min.css'
    ],

    js: [
        '~/assets/js/main.js'
    ],

    head: {
        title: 'BluSpring Website',
        meta: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ]
    },

    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode'
    ],

    ssr: false,
    compatibilityDate: '2024-09-17',

    colorMode: {
        preference: 'system', // default value of $colorMode.preference
        fallback: 'dark', // fallback value if not system preference found
        hid: 'nuxt-color-mode-script',
        globalName: '__NUXT_COLOR_MODE__',
        componentName: 'ColorScheme',
        classPrefix: '',
        classSuffix: '-mode',
        storage: 'localStorage', // or 'sessionStorage' or 'cookie'
        storageKey: 'nuxt-color-mode'
    }
});