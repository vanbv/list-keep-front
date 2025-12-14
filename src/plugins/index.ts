/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from './vuetify'
import i18n from './i18n'
import pinia from '../stores'
import { useRouter } from '@/router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import rules from './rules'
import VueKeyCloak, { type VueKeycloakOptions } from '@dsb-norge/vue-keycloak-js'
import { useErrorHandler } from '@/composables/useErrorHandler'

const { handleError } = useErrorHandler()

// Types
import type { App } from 'vue'
import { axiosService } from '@/services/AxiosService'

export function registerPlugins (app: App) {
  app
    .use(vuetify)
    .use(i18n)
    .use(useRouter())
    .use(VueAxios, axios)
    .use(pinia)
    .use(rules)
    .use(VueKeyCloak, {
      config: {
        realm: 'list-keep',
        url: import.meta.env.VITE_KEYCLOAK_URL as string,
        clientId: 'list-keep',
      },
      init: {
        onLoad: 'login-required',
      },
      onReady: () => {
        axiosService.setupInterceptors()
        app.mount('#app')
      },
      onInitError: handleError,
    } as VueKeycloakOptions)
}
