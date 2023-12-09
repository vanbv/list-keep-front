/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

import { login } from '@/plugins/keycloak'
import { setupInterceptors } from '@/plugins/axios'
import {setupRouteWatch} from "@/plugins/router"

login(() => {
  setupInterceptors()
  setupRouteWatch()

  const app = createApp(App)

  registerPlugins(app)

  app.mount('#app')
})
