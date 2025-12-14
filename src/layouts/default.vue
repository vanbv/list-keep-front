<template>
  <v-app v-if="keycloak.authenticated">
    <DefaultBar />

    <DefaultView />

    <DefaultSnackbar />
  </v-app>
</template>

<script lang="ts" setup>
  import DefaultBar from './default/AppBar.vue'
  import DefaultView from './default/View.vue'
  import DefaultSnackbar from './default/Snackbar.vue'
  import { useKeycloak } from '@dsb-norge/vue-keycloak-js'

  const keycloak = useKeycloak()
</script>
