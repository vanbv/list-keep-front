<template>
  <v-snackbar
    v-model="snackbar.show"
  >
    {{ snackbar.message }}

    <template #actions>
      <v-tooltip :text="t('hide')">
        <template #activator="{ props }">
          <v-btn
            v-bind="props"
            icon="mdi-close"
            size="x-small"
            @click="hideSnackbar"
          />
        </template>
      </v-tooltip>
    </template>
  </v-snackbar>
</template>

<script lang="ts" setup>
  import { useLocale } from 'vuetify'
  import { useSnackbarStore } from '@/stores/snackbar'

  const snackbar = useSnackbarStore()
  const { t } = useLocale()

  function hideSnackbar () {
    snackbar.show = false
  }
</script>
