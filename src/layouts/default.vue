<template>
  <v-app>
    <DefaultBar />

    <DefaultView />

    <DefaultSnackbar />
  </v-app>
</template>

<script lang="ts" setup>
  import DefaultBar from './default/AppBar.vue'
  import DefaultView from './default/View.vue'
  import DefaultSnackbar from './default/Snackbar.vue'
</script>
