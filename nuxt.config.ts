// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  typescript: {
    typeCheck: true,
  },

  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    '@nuxt/content',
  ],

  colorMode: {
    classSuffix: '',
  },
})
