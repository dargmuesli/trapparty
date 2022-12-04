import moment from 'dayjs'
import 'dayjs/locale/de'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import relativeTime from 'dayjs/plugin/relativeTime'

export default defineNuxtPlugin((_nuxtApp) => {
  moment.extend(localizedFormat)
  moment.extend(relativeTime)

  return {
    provide: {
      moment,
    },
  }
})
