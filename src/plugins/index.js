/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import i18n from './i18n'
import pinia from '@/store'
import router from '@/router'
import axios from 'axios'
import VueAxios from 'vue-axios'

export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(i18n)
    .use(router)
    .use(VueAxios, axios)
    .use(pinia)
}
