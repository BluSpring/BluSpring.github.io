import { defineNuxtConfig } from 'nuxt'
import RollupNodeResolve from '@rollup/plugin-node-resolve';
import RollupTS from 'rollup-plugin-typescript';
import RollupImport from 'rollup-plugin-import-resolver';
import RollupCSS from 'rollup-plugin-import-css';

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
    nitro: {
        rollupConfig: {
            plugins: [
                RollupCSS(),
                RollupNodeResolve(),
                RollupTS(),
                RollupImport(),
            ]
        }
    }
})
