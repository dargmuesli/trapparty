import { JWT_NAME } from '@dargmuesli/nuxt-vio/shared/utils/constants'
import { VIO_NUXT_BASE_CONFIG } from '@dargmuesli/nuxt-vio/shared/utils/nuxt'
import { defu } from 'defu'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'

import { SITE_NAME, PRODUCTION_HOST } from './shared/utils/constants'

export default defineNuxtConfig(
  defu(
    {
      css: ['~/assets/css/trapparty.css'],
      extends: ['@dargmuesli/nuxt-vio'],
      modules: ['pinia-plugin-persistedstate/nuxt'],
      nitro: {
        storage: {
          fs: {
            driver: 'fs',
            base: './.data/db',
          },
        },
      },
      runtimeConfig: {
        trapparty: {
          admin: {
            token: '',
          },
        },
      },
      vite: {
        optimizeDeps: {
          include: [
            '@dargmuesli/nuxt-vio/app/stores/auth',
            '@dargmuesli/nuxt-vio/shared/utils/constants',
            '@urql/core',
            '@urql/devtools',
            '@urql/exchange-graphcache',
            '@urql/exchange-graphcache/default-storage',
            '@urql/vue',
            '@vuelidate/core',
            '@vuelidate/validators',
            'color',
            'rainbowvis.js',
            'chart.js',
            'lodash-es',
            'vue-chartjs',
          ],
        },
        // TODO: remove `as never` when plugin types are fixed
        plugins: [
          Components({
            dts: '.nuxt/components-icons.d.ts',
            resolvers: [IconsResolver()],
          }) as never,
          Icons({
            scale: 1.5,
          }) as never,
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
      stagingHost: PRODUCTION_HOST,
    }),
  ),
)
