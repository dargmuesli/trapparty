<template>
  <Loader :api="api">
    <div class="text-center">
      <h1>
        {{
          trapPartyEvent
            ? `Willkommen zur TrapParty ${trapPartyEvent.name}!`
            : title
        }}
      </h1>
      <div v-if="trapPartyEvent">
        <p>
          {{ t('greeting') }}
        </p>
        <Card class="my-8 flex flex-col items-center lg:flex-row lg:flex-wrap">
          <Form
            class="lg:w-8/12"
            :form="v$"
            :form-sent="isFormSent"
            :submit-name="t('save')"
            @submit.prevent="saveCode"
          >
            <h2>
              {{ t('participate') }}
            </h2>
            <p>
              {{ t('participateDescription') }}
            </p>
            <!--
              The id's suffix `-trapparty` makes browser suggest inputs just
              for this service.
            -->
            <FormInput
              id-label="input-participation-code-trapparty"
              :is-disabled="!!route.query.ic"
              :title="t('invitationCode')"
              type="text"
              placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
              :value="v$.invitationCode"
              @input="form.invitationCode = $event"
            >
              <template #stateInfo>
                <div v-if="route.query.ic">
                  {{ t('invitationCodeAutomatic') }}
                  <AppLink
                    :aria-label="t('invitationCodeManual')"
                    :to="
                      localePath({
                        query: undefined,
                      })
                    "
                  >
                    {{ t('invitationCodeManual') }}
                  </AppLink>
                </div>
              </template>
              <template #stateError>
                <FormInputStateError
                  :form-input="v$.invitationCode"
                  validation-property="required"
                >
                  {{ t('globalValidationRequired') }}
                </FormInputStateError>
                <FormInputStateError
                  :form-input="v$.invitationCode"
                  validation-property="formatUuid"
                >
                  {{ t('globalValidationFormatIncorrect') }}
                </FormInputStateError>
              </template>
            </FormInput>
          </Form>
          <div class="flex self-stretch px-8 py-8 lg:w-1/12 justify-center">
            <div class="h-0 w-full border border-gray-300 lg:h-full lg:w-0" />
          </div>
          <Form
            class="lg:w-2/12"
            :form="v$Anonymous"
            :form-sent="isFormAnonymousSent"
            :submit-name="t('anonymous')"
            @submit.prevent="anonymous"
          >
            <h2>
              {{ t('anonymousTitle') }}
            </h2>
            <p>
              {{ t('anonymousDescription') }}
            </p>
          </Form>
          <p
            v-if="$slots.disclaimer"
            class="w-full text-center text-sm opacity-50"
          >
            <slot name="disclaimer" />
          </p>
        </Card>
      </div>
      <CardStateInfo v-else>
        {{ t('datalessEvent') }}
      </CardStateInfo>
    </div>
  </Loader>
</template>

<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { consola } from 'consola'

import { useEventByNameQuery } from '~/gql/documents/queries/event/eventByName'
import { useStore } from '~/store'
import { getEventItem } from '~/gql/documents/fragments/eventItem'

export interface Props {
  eventName: string
}
const props = withDefaults(defineProps<Props>(), {})

const route = useRoute()
const { t } = useI18n()
const router = useRouter()
const store = useStore()
const localePath = useLocalePath()

// queries
const eventByNameQuery = await useEventByNameQuery({
  eventName: props.eventName,
})

// api data
const api = computed(() =>
  reactive({
    data: {
      ...eventByNameQuery.data.value,
    },
    ...getApiMeta([eventByNameQuery]),
  }),
)
const trapPartyEvent = computed(() =>
  getEventItem(eventByNameQuery.data.value?.eventByName),
)

// data
const form = reactive({
  invitationCode: ref(
    Array.isArray(route.query.ic) || route.query.ic === null
      ? undefined
      : route.query.ic,
  ),
})
const isFormSent = ref(false)
const formAnonymous = reactive({})
const isFormAnonymousSent = ref(false)
const title = t('title')

// methods
const anonymous = () => {
  store.participationDataSet({ role: 'watcher' })
  router.push({
    path: append(route.path, 'dashboard'),
  })
}
const saveCode = async () => {
  if (!form.invitationCode) return

  try {
    await formPreSubmit(api, v$, isFormSent)
  } catch (error) {
    return
  }

  v$.value.$reset()
  store.participationDataSet({
    role: 'player',
    invitationCode: form.invitationCode,
  })
  router.push({
    path: append(route.path, 'dashboard'),
  })
}

// vuelidate
const rules = {
  invitationCode: {
    required,
    formatUuid: VERIFICATION_FORMAT_UUID,
  },
}
const rulesAnonymous = {}
const v$ = useVuelidate(rules, form)
const v$Anonymous = useVuelidate(rulesAnonymous, formAnonymous)

// lifecycle
onMounted(() => {
  if (route.query.ic !== undefined) {
    v$.value.invitationCode.$touch()
  }
})
watch(eventByNameQuery.error, (currentValue, _oldValue) => {
  if (currentValue) consola.error(currentValue)
})

// initialization
useHeadDefault(title)
</script>

<script lang="ts">
export default {
  name: 'IndexPage',
}
</script>

<i18n lang="yaml">
de:
  anonymous: Anonym teilnehmen
  anonymousDescription: Du möchtest nur zuschauen?
  anonymousTitle: 👻
  datalessEvent: Aktuell sind keine Daten für eine kommende TrapParty vorhanden.
  greeting: 'Schön, dass du da bist! 😊 Jetzt kann es losgehen.'
  invitationCode: Teilnahmecode
  invitationCodeAutomatic: Der Teilnahmecode wurde automatisch für dich eingegeben.
  invitationCodeManual: Code selbst eingeben.
  participate: Mitmachen
  participateDescription: Die Standard-Wahl für alle eingeladenen Gäste. Volle Power ins Abenteuer! 🥳🚀
  save: Zu meiner Übersichtsseite
  title: Willkommen!
en:
  anonymous: Participate anonymously
  anonymousDescription: You just want to watch?
  anonymousTitle: 👻
  datalessEvent: Currently there are no dates available for an upcoming TrapParty.
  greeting: "Glad you're here! 😊 Now you're ready to go."
  invitationCode: Participation code
  invitationCodeAutomatic: The participation code was automatically entered for you.
  invitationCodeManual: Enter code yourself.
  participate: Participate
  participateDescription: The standard choice for all invited guests. Full power into the adventure! 🥳🚀
  save: To my dashboard
  title: Welcome!
</i18n>
