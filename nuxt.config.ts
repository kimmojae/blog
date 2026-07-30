// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-07-30',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    '@nuxt/content',
  ],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: '32x32' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      ],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  colorMode: {
    classSuffix: '',
  },
  typescript: { typeCheck: false },
})
