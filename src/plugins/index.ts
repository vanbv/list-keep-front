/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from './vuetify'
import i18n from './i18n'
import pinia from '../stores'
import router from '../router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import rules from './rules'

// Types
import type { App } from 'vue'

export function registerPlugins (app: App) {
  app
    .use(vuetify)
    .use(i18n)
    .use(router)
    .use(VueAxios, axios)
    .use(pinia)
    .use(rules)
}
