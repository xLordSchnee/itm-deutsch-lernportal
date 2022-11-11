import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'dark',
      themes: {
        dark: {
          dark: true,
          colors: {
            primary: '#ad1457',
            'primary-dark': '#78002e',
            'primary-light': '#e35183',
            secondary: '#00897b',
            'secondary-dark': '#005b4f',
            'secondary-light': '#4ebaaa',
          }
        }
      }
    },
    display: {
      mobileBreakpoint: 'sm',
    },
    components,
    directives,
  })

  nuxtApp.vueApp.use(vuetify)
})