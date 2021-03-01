<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

import Vue from 'vue'
import axios from 'axios'
import { updateToken } from '@/plugins/keycloak-util'

const AUTHORIZATION_HEADER = 'Authorization'

export default Vue.extend({
  name: 'App',
  created: function () {
    axios.interceptors.request.use(async config => {
      const token = await updateToken()
      config.headers.common[AUTHORIZATION_HEADER] = `Bearer ${token}`
      return config
    })
    
    axios.interceptors.response.use( (response) => {
      return response
    }, error => {
      return new Promise((resolve, reject) => {
        this.$router.push('/error')
        reject(error)
      })
    })
  },
  watch: {
    $route() {
      updateToken()
    }
  }
})
</script>