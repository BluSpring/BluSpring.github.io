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
        '@nuxtjs/tailwindcss'
    ],
    ssr: false
})
