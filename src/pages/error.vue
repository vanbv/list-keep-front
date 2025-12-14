<template>
  <v-alert
    :text="t('please.try.again.later')"
    :title="t('oops.error.has.occurred')"
    type="error"
    variant="outlined"
  >
    <br>

    <v-btn
      color="indigo-darken-3"
      href="/"
      variant="text"
    >
      {{ t('go.to.main.page') }}
    </v-btn>
  </v-alert>
</template>

<route lang="yaml">
meta:
  layout: empty
</route>

<script lang="ts" setup>
  import { useLocale } from 'vuetify'

  const { t } = useLocale()
</script>
