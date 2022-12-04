import { IncomingMessage } from 'node:http'

import { helpers } from '@vuelidate/validators'
import { CombinedError } from '@urql/core'
import Swal from 'sweetalert2'
import { ComputedRef, Ref } from 'vue'

import { REGEX_SLUG, REGEX_UUID } from './constants'

export type BackendError = CombinedError | { errcode: string; message: string }

export type ApiData = ComputedRef<{
  data?: Object
  errors: BackendError[]
  isFetching: boolean
}>

export const VERIFICATION_FORMAT_SLUG = helpers.regex(REGEX_SLUG)
export const VERIFICATION_FORMAT_UUID = helpers.regex(REGEX_UUID)

export function append(path: string, pathToAppend: string): string {
  return path + (path.endsWith('/') ? '' : '/') + pathToAppend
}

export function arrayRemoveNulls<T>(array?: Array<T>) {
  return array?.flatMap((x: T) => (x ? [x] : [])) || []
}

export async function formPreSubmit(
  api: ApiData,
  v$: any,
  isFormSent: Ref<boolean>
): Promise<boolean> {
  api.value.errors = []
  v$.value.$touch()

  const isFormValid = await v$.value.$validate()
  isFormSent.value = isFormValid

  if (!isFormValid) {
    throw new Error('Form is invalid!')
  }

  return isFormValid
}

export function getCombinedErrorMessages(
  errors: BackendError[],
  pgIds?: Record<string, string>
) {
  const errorMessages: string[] = []

  for (const error of errors) {
    if ('errcode' in error) {
      const translation = pgIds && pgIds[`postgres${error.errcode}`]

      if (translation) {
        errorMessages.push(translation)
      } else {
        errorMessages.push(error.message)
      }
    } else {
      const combinedError = error

      if (combinedError.networkError) {
        errorMessages.push(combinedError.message)
      }

      for (const graphqlError of combinedError.graphQLErrors) {
        errorMessages.push(graphqlError.message)
      }
    }
  }

  return errorMessages
}

export function getDomainTldPort(host: string) {
  const hostParts = host.split('.')

  if (hostParts.length >= 2) {
    if (hostParts[hostParts.length - 1] === 'localhost') {
      return 'localhost'
    } else {
      return `${hostParts[hostParts.length - 2]}.${
        hostParts[hostParts.length - 1]
      }`
    }
  } else {
    return hostParts[hostParts.length - 1]
  }
}

export function getHost(req: IncomingMessage) {
  if (!req.headers.host) throw new Error('Host header is not given!')

  return req.headers.host
}

export const getApiDataDefault = (): ApiData =>
  computed(() =>
    reactive({
      data: undefined,
      ...getApiMeta(),
    })
  )

export const getApiMeta = (
  queries?: {
    error: Ref<CombinedError | undefined>
    fetching: Ref<boolean>
  }[]
) => ({
  errors: queries
    ? queries.reduce((p, c) => {
        if (c.error.value) {
          return [...p, c.error.value]
        } else {
          return p
        }
      }, [] as BackendError[])
    : [],
  isFetching: queries
    ? queries.reduce((p, c) => p || c.fetching.value, false)
    : false,
})

export function showToast({ title }: { title: string }) {
  Swal.fire({
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    },
    icon: 'success',
    position: 'bottom-right',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    title,
    toast: true,
  })
}

export function xhrPromise(
  method: string,
  url: string,
  jwt: string
): Promise<any> {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url)

    if (jwt) {
      xhr.setRequestHeader('Authorization', 'Bearer ' + jwt)
    }

    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response)
      } else {
        reject(new Error(`${this.status}\n${xhr.statusText}`))
      }
    }
    xhr.onerror = function () {
      reject(new Error(`${this.status}\n${xhr.statusText}`))
    }
    xhr.send()
  })
}
