import { defineStore } from 'pinia'
import { ref } from 'vue'

import type { ParticipationData } from '../types/trapparty'

export const useStore = defineStore(
  'trapparty',
  () => {
    const participationData = ref<ParticipationData>({ role: 'watcher' })

    const participationDataSet = (participationDataNew: ParticipationData) =>
      (participationData.value = participationDataNew)

    return {
      participationData,
      participationDataSet,
    }
  },
  { persist: true },
)
