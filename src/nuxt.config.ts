import {
  VIO_NUXT_BASE_CONFIG,
  // I18N_COOKIE_NAME,
  JWT_NAME,
} from '@dargmuesli/nuxt-vio/utils/constants'
import { defu } from 'defu'

import { BASE_URL, SITE_NAME } from './utils/constants'

export default defineNuxtConfig(
  defu(
    {
      extends: ['@dargmuesli/nuxt-vio'],
      modules: ['@pinia-plugin-persistedstate/nuxt'],

      // modules
      cookieControl: {
        cookies: {
          necessary: [
            {
              description: {
                de: 'Dieser Cookie von uns speichert Berechtigungen für den Datenbankzugriff dieser Webseite.',
                en: "This cookie of ours stores permissions for this website's database access.",
              },
              id: 'a',
              name: {
                de: 'Authentifizierungsdaten',
                en: 'Authentication Data',
              },
              targetCookieIds: [JWT_NAME()],
            },
            // {
            //   description: {
            //     de: 'Dieser Cookie von uns speichert die Einstellungen, die in diesem Dialog getroffen werden.',
            //     en: 'This cookie of ours stores the settings made in this dialog.',
            //   },
            //   id: 'c',
            //   name: {
            //     de: 'Cookie-Präferenzen',
            //     en: 'Cookie Preferences',
            //   },
            //   targetCookieIds: ['ncc_c', 'ncc_e'],
            // },
            // {
            //   description: {
            //     de: 'Dieser Cookie von uns speichert die Sprache, in der diese Webseite angezeigt wird.',
            //     en: "This cookie of ours stores the language that's used to display this website.",
            //   },
            //   id: 'l',
            //   name: {
            //     de: 'Sprache',
            //     en: 'Language',
            //   },
            //   targetCookieIds: [I18N_COOKIE_NAME],
            // },
          ],
          optional: [
            //   {
            //     description: {
            //       de: 'Die Cookies vom Drittanbieter Google ermöglichen die Analyse von Nutzerverhalten. Diese Analyse hilft uns unsere Dienste zu verbessern, indem wir verstehen, wie diese Webseite genutzt wird.',
            //       en: 'The third-party cookies by Google enable the analysis of user behavior. This analysis helps us to improve our services by understanding how this website is used.',
            //     },
            //     id: 'ga',
            //     links: {
            //       'https://policies.google.com/privacy': 'Google Privacy Policy',
            //       'https://policies.google.com/terms': 'Google Terms of Service',
            //     },
            //     name: 'Analytics',
            //     targetCookieIds: ['_ga', '_ga_K4R41W62BR'],
            //   },
          ],
        },
        // locales: ['en', 'de'],
      },
    },
    VIO_NUXT_BASE_CONFIG({
      baseUrl: BASE_URL,
      siteName: SITE_NAME,
      stagingHost: 'jonas-thelemann.de',
    }),
  ),
)
