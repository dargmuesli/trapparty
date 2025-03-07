import { JWT_NAME, SITE_URL } from '@dargmuesli/nuxt-vio/utils/constants'
import { VIO_NUXT_BASE_CONFIG } from '@dargmuesli/nuxt-vio/utils/nuxt'
import { defu } from 'defu'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'

import { SITE_NAME, STAGING_HOST } from '../utils/constants'
import { GET_CSP } from '../server/utils/constants'

export default defineNuxtConfig(
  defu(
    {
      css: ['~/assets/css/trapparty.css'],
      extends: ['@dargmuesli/nuxt-vio'],
      modules: [
        '@pinia-plugin-persistedstate/nuxt',
        // nuxt-security: apply content security policy at build time
        (_options, nuxt) => {
          if (nuxt.options._generate) {
            if (nuxt.options.security.headers) {
              nuxt.options.security.headers.contentSecurityPolicy = defu(
                GET_CSP(SITE_URL),
                nuxt.options.security.headers.contentSecurityPolicy,
              )
            }
          }
        },
      ],
      vite: {
        optimizeDeps: {
          include: [
            '@dargmuesli/nuxt-vio/utils/constants',
            '@vuelidate/core',
            '@vuelidate/validators',
            'color',
            'rainbowvis.js',
            'chart.js',
            'lodash-es',
            'vue-chartjs',
          ],
        },
        plugins: [
          Components({
            dts: '.nuxt/components-icons.d.ts',
            resolvers: [IconsResolver()],
          }),
          Icons({
            scale: 1.5,
          }),
        ],
      },

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
      gtag: {
        id: 'G-K4R41W62BR',
      },
      piniaPluginPersistedstate: {
        cookieOptions: {
          sameSite: 'strict',
        },
      },
    },
    VIO_NUXT_BASE_CONFIG({
      siteName: SITE_NAME,
      stagingHost: STAGING_HOST,
    }),
  ),
)
