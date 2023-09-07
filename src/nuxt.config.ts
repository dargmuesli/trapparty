import {
  VIO_NUXT_BASE_CONFIG,
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
          ],
          optional: [],
        },
      },
    },
    VIO_NUXT_BASE_CONFIG({
      baseUrl: BASE_URL,
      siteName: SITE_NAME,
      stagingHost: 'jonas-thelemann.de',
    }),
  ),
)
