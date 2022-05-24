import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    target: 'static',
    css: [
        '~/assets/css/index.css',
        '~/assets/css/all.min.css'
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
    ssr: false,
    generate: {
        fallback: '404/index.html'
    }
})
