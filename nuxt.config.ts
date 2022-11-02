export default defineNuxtConfig({
    app: {
        head: {
            title: 'Home',
        }
    },
    css: [
        'assets/complete.scss',
        '@mdi/font/css/materialdesignicons.min.css',
        'vuetify/lib/styles/main.sass',
    ],
    build: {
        transpile: ['vuetify'],
    },
    buildModules: [
        [
            '@pinia/nuxt',
            {
                imports: [
                    // automatically imports `usePinia()`
                    'defineStore',
                    // automatically imports `usePinia()` as `usePiniaStore()`
                    ['defineStore', 'definePiniaStore'],
                ],
            },
        ],
    ],
    vite: {
        define: {
            "process.env.DEBUG": true
        }
    }
})
