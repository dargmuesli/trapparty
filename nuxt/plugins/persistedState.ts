import createPersistedState from 'vuex-persistedstate'
import Cookies from 'js-cookie'
import { getCookie } from 'h3'

import { defineNuxtPlugin, useRequestEvent } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const event = useRequestEvent()

  createPersistedState({
    paths: ['participationData'],
    storage: {
      getItem: (key) => {
        if (process.server) {
          return getCookie(event, key)
        } else {
          return Cookies.get(key)
        }
      },
      setItem: (key, value) =>
        Cookies.set(key, value, { expires: 365, secure: true }),
      removeItem: (key) => Cookies.remove(key),
    },
  })(nuxtApp.nuxt2Context.store)
})
