/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import i18n from './i18n'
import router from '../router'
import axios from 'axios'
import VueAxios from 'vue-axios'

export function registerPlugins (app) {
  loadFonts()
  app
    .use(vuetify)
    .use(i18n)
    .use(router)
    .use(VueAxios, axios)
}
