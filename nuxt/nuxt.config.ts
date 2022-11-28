import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import graphqlPlugin from '@rollup/plugin-graphql'

const BASE_URL =
  'https://' +
  (process.env.NUXT_PUBLIC_STACK_DOMAIN ||
    `${process.env.HOST || 'localhost'}:3000`)

export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: 'layout',
    },
  },
  css: ['@/assets/css/main.css'],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // [
    //   '@dargmuesli/nuxt-cookie-control',
    //   {
    //     locales: ['en', 'de'],
    //     necessary: [
    //       {
    //         name: {
    //           de: 'Authentifizierungsdaten',
    //           en: 'Authentication Data',
    //         },
    //         // cookies: ['JWT_NAME'],
    //       },
    //       {
    //         name: {
    //           de: 'Cookie-Präferenzen',
    //           en: 'Cookie Preferences',
    //         },
    //         // cookies: ['cookie_control_consent', 'cookie_control_enabled_cookies'],
    //       },
    //       {
    //         name: {
    //           de: 'Spracheinstellungen',
    //           en: 'Language Settings',
    //         },
    //         // cookies: ['i18n_redirected'],
    //       },
    //     ],
    //     optional: [
    //       {
    //         name: 'Google Analytics',
    //         identifier: 'ga',
    //         // cookies: ['_ga', '_gat', '_gid'],
    //         accepted: () => {
    //           const { $ga } = useNuxtApp()
    //           $ga.enable()
    //         },
    //         declined: () => {
    //           const { $ga } = useNuxtApp()
    //           $ga.disable()
    //         },
    //       },
    //     ],
    //   },
    // ],
    // [
    //   '@nuxtjs/fontawesome',
    //   {
    //     icons: {
    //       brands: ['faYoutube'],
    //       solid: [
    //         'faBalanceScale',
    //         'faBug',
    //         'faChartBar',
    //         'faDownload',
    //         'faExclamationCircle',
    //         'faHeart',
    //         'faHome',
    //         'faLink',
    //         'faShareAlt',
    //         'faSignInAlt',
    //         'faTv',
    //       ],
    //     },
    //     useLayers: false,
    //     useLayersText: false,
    //   },
    // ],
    [
      '@nuxtjs/html-validator',
      {
        failOnError: true,
        logLevel: 'warning',
      },
    ],
    [
      '@nuxtjs/i18n',
      {
        baseUrl: BASE_URL,
        defaultLocale: 'de', // Must be set for the default prefix_except_default prefix strategy.
        detectBrowserLanguage: {
          cookieSecure: true,
          redirectOn: 'root',
        },
        locales: [
          // {
          //   code: 'en',
          //   name: 'English',
          //   iso: 'en', // Will be used as catchall locale by default.
          // },
          {
            code: 'de',
            name: 'Deutsch',
            iso: 'de',
          },
        ],
        vueI18n: {
          messages: {
            de: {
              globalLoading: 'Lade...',
              globalOgImageAlt: 'TrapPartys Logo.',
              globalOgSeoDescription: 'TrapPartys Online-Version.',
              globalValidationFailed: 'Bitte überprüfe deine Eingaben 🙈',
              globalValidationFormatIncorrect: 'Falsches Format.',
              globalValidationRequired: 'Pflichtfeld.',
            },
            en: {
              globalLoading: 'Loading...',
              globalOgImageAlt: "TrapParty's logo.",
              globalOgSeoDescription: "TrapParty's online version.",
              globalValidationFailed: 'Please check your input 🙈',
              globalValidationFormatIncorrect: 'Incorrect format.',
              globalValidationRequired: 'Required.',
            },
          },
          fallbackWarn: false, // TODO: don't show incorrect warnings (https://github.com/intlify/vue-i18n-next/issues/776)
        },
        // vueI18nLoader: true,
      },
    ],
    '@nuxtjs/robots',
    '@funken-studio/sitemap-nuxt-3', // Should be declared at the end of the array.
  ],
  nitro: {
    compressPublicAssets: true,
  },
  postcss: {
    plugins: { tailwindcss: {}, autoprefixer: {} },
  },
  typescript: {
    shim: false,
    strict: true,
    tsConfig: {
      compilerOptions: {
        // esModuleInterop: true,
      },
      vueCompilerOptions: {
        htmlAttributes: [], // https://github.com/johnsoncodehk/volar/issues/1970#issuecomment-1276994634
      },
    },
  },
  vite: {
    plugins: [
      VueI18nPlugin({
        include:
          '!' +
          resolve(dirname(fileURLToPath(import.meta.url)), './node_modules/**'), // https://github.com/intlify/bundle-tools/issues/168
      }),
      // @ts-ignore https://github.com/rollup/plugins/issues/1243
      graphqlPlugin(),
    ],
  },
})
