import moment from 'dayjs'
import 'dayjs/locale/de'

export default defineNuxtPlugin((_nuxtApp) => {
  return {
    provide: {
      moment,
    },
  }
})
