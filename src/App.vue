<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script lang="ts" setup>
  import { watch } from 'vue'
  import { keycloakService } from '@/services/KeycloakService.ts'
  import { useRoute } from 'vue-router'

  const route = useRoute()

  watch(route, () => keycloakService.updateToken())
</script>
