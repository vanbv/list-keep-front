import { axiosService } from '@/services/AxiosService'
import type { VueKeycloakOptions } from '@dsb-norge/vue-keycloak-js'
import { useErrorHandler } from '@/composables/useErrorHandler'

const { handleError } = useErrorHandler()

export default {
  config: {
    realm: 'list-keep',
    url: import.meta.env.VITE_KEYCLOAK_URL as string,
    clientId: 'list-keep',
  },
  init: {
    onLoad: 'login-required',
  },
  onReady: axiosService.setupInterceptors,
  onInitError: handleError,
} as VueKeycloakOptions
