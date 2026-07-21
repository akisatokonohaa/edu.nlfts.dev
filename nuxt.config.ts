// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['..'],

  // Static Site Generation
  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
      ignore: [
        '/sign-in',
        '/get-started',
        '/pricing',
        '/docs',
        '/webinars',
      ],
      failOnError: false,
    },
  },

  i18n: {
    defaultLocale: 'id',
    locales: [
      {
        code: 'id',
        name: 'Bahasa Indonesia',
        language: 'id-ID',
      },
    ],
  },
  content: {
    highlight: {
      langs: ['mdc', 'mermaid', 'tsx'],
    },
  },
  compatibilityDate: '2025-05-13',
});
