<template>
  <v-app v-if="keycloak.authenticated">
    <DefaultView />
  </v-app>
</template>

<script lang="ts" setup>
  import DefaultView from './default/View.vue'
  import { useKeycloak } from '@dsb-norge/vue-keycloak-js'

  const keycloak = useKeycloak()
</script>
