import moment from 'dayjs'
import 'dayjs/locale/de'
import relativeTime from 'dayjs/plugin/relativeTime'

export default defineNuxtPlugin((_nuxtApp) => {
  moment.extend(relativeTime)

  return {
    provide: {
      moment,
    },
  }
})
