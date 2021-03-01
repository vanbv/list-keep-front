import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from '@/router'
import i18n from '@/plugins/i18n'
import '@/plugins/keycloak'
import { updateToken } from '@/plugins/keycloak-util'

Vue.config.productionTip = false

Vue.$keycloak.init({ onLoad: 'login-required' }).then((auth) => {
  if (!auth) {
    window.location.reload();
  } else {
    new Vue({
      vuetify,
      router,
      i18n,
      render: h => h(App)
    }).$mount('#app')

    window.onfocus = () => {
      updateToken()
    }
  }
})
