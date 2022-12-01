<template>
  <Loader :api="api">
    <div>
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
          <div
            class="card my-8 flex flex-col items-center lg:flex-row lg:flex-wrap"
          >
            <Form
              class="lg:w-8/12"
              :form="v$.form"
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
              <FormInput
                :error="v$.form.invitationCode.$error"
                label-for="input-participation-code-trapparty"
                :title="t('invitationCode')"
              >
                <!--
                  The id's suffix `-trapparty` makes browser suggest inputs just
                  for this service.
                -->
                <input
                  id="input-participation-code-trapparty"
                  v-model.trim="invitationCodeModel"
                  class="form-input"
                  :disabled="!!route.query.ic"
                  type="text"
                  placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
                />
                <template #inputInfo>
                  <div v-if="route.query.ic">
                    {{ t('invitationCodeAutomatic') }}
                    <AppLink :to="localePath('/')">
                      {{ t('invitationCodeManual') }}
                    </AppLink>
                  </div>
                </template>
                <template #inputError>
                  <FormInputStateError
                    :form-input="v$.form.invitationCode"
                    validation-property="required"
                  >
                    {{ t('globalValidationRequired') }}
                  </FormInputStateError>
                  <FormInputStateError
                    :form-input="v$.form.invitationCode"
                    validation-property="formatUuid"
                  >
                    {{ t('globalValidationFormatIncorrect') }}
                  </FormInputStateError>
                </template>
              </FormInput>
            </Form>
            <div class="self-stretch px-8 py-8 lg:w-1/12">
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
            <p class="w-full text-center text-sm opacity-50">
              {{ t('disclaimer') }}
            </p>
          </div>
        </div>
        <div v-else class="info">
          {{ t('datalessEvent') }}
        </div>
      </div>
    </div>
  </Loader>
</template>

<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import consola from 'consola'

import { useEventByNameQuery } from '~/gql/generated'
import { useStore } from '~/store'

const route = useRoute()
const { t } = useI18n()
const router = useRouter()
const store = useStore()
const localePath = useLocalePath()

// queries
const eventByNameQuery = await useEventByNameQuery({
  variables: {
    eventName: '2020',
  },
})

// api data
const api = computed(() =>
  reactive({
    data: {
      ...eventByNameQuery.data.value,
    },
    ...getApiMeta([eventByNameQuery]),
  })
)
const trapPartyEvent = computed(() => eventByNameQuery.data.value?.eventByName)

// data
const form = reactive({
  invitationCode: ref(
    Array.isArray(route.query.ic) || route.query.ic === null
      ? undefined
      : route.query.ic
  ),
})
const isFormSent = ref(false)
const formAnonymous = reactive({})
const isFormAnonymousSent = ref(false)
const title = t('title')

// computations
const invitationCodeModel = computed({
  get() {
    const routeQueryIc =
      Array.isArray(route.query.ic) || route.query.ic === null
        ? undefined
        : route.query.ic
    return routeQueryIc !== undefined
      ? routeQueryIc
      : v$.value.form.invitationCode.$model
  },
  set(value) {
    v$.value.form.invitationCode.$model = value
  },
})

// methods
function anonymous() {
  store.participationDataSet({ role: 'watcher' })
  router.push({
    path: append(route.path, 'instructions'),
  })
}
async function saveCode() {
  try {
    await formPreSubmit(api, v$, isFormSent)
  } catch (error) {
    return
  }

  v$.value.form.$reset()
  store.participationDataSet({
    role: 'player',
    invitationCode:
      Array.isArray(form.invitationCode) || form.invitationCode === null
        ? undefined
        : form.invitationCode,
  })
  router.push({
    path: append(route.path, 'instructions'),
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
    v$.value.form.invitationCode.$touch()
  }
})
watch(eventByNameQuery.error, (currentValue, _oldValue) => {
  if (currentValue) consola.error(currentValue)
})

// initialization
useHeadDefault(title)
</script>

<i18n lang="yaml">
de:
  anonymous: Anonym teilnehmen
  anonymousDescription: Du bist in keinem Team?
  anonymousTitle: 👻
  datalessEvent: Aktuell sind keine Daten für eine kommende TrapParty vorhanden.
  greeting: 'Schön, dass du da bist! 😊 Jetzt kann es losgehen.'
  invitationCode: Teilnahmecode
  invitationCodeAutomatic: Der Teilnahmecode wurde automatisch für dich eingegeben.
  invitationCodeManual: Code selbst eingeben.
  participate: Mitmachen
  participateDescription: Die Standard-Wahl für alle eingeladenen Gäste. Volle Power ins Abenteuer! 🥳🚀
  save: Zu meiner Übersichtsseite
  disclaimer: Für die kommende Veranstaltung sind Coronaschutzmaßnahmen implementiert. Der Kontakt zu entsprechenden Behörden besteht.
  title: Willkommen!
</i18n>
