import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import graphqlPlugin from '@rollup/plugin-graphql'

import localeDe from './locales/de.json'

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
  css: ['~/assets/css/main.css'],
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
    [
      '@nuxtjs/color-mode',
      {
        classSuffix: '',
      },
    ],
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
        // legacy: false,
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
            de: localeDe,
            // en: localeEn,
          },
          fallbackWarn: false, // TODO: don't show incorrect warnings (https://github.com/intlify/vue-i18n-next/issues/776)
        },
        // vueI18nLoader: true,
      },
    ],
    '@nuxtjs/robots',
    '@pinia/nuxt',
    '@funken-studio/sitemap-nuxt-3', // Should be declared at the end of the array.
  ],
  nitro: {
    compressPublicAssets: true,
  },
  postcss: {
    plugins: { tailwindcss: {}, autoprefixer: {} },
  },
  runtimeConfig: {
    public: {
      stagingHost:
        process.env.NODE_ENV !== 'production' &&
        !process.env.NUXT_PUBLIC_STACK_DOMAIN
          ? 'jonas-thelemann.de'
          : undefined,
    },
  },
  typescript: {
    shim: false,
    strict: true,
    tsConfig: {
      compilerOptions: {
        // esModuleInterop: true,
        // noErrorTruncation: true,
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
      graphqlPlugin(),
    ],
  },
})
