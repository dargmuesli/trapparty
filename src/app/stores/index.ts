import { defineStore } from 'pinia'
import { ref } from 'vue'

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
