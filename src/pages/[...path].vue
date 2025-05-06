<template>
  <v-alert
    :text="$t('page.you.looking.for.does.not.exist')"
    :title="$t('whoops.404')"
    type="error"
    variant="outlined"
  >
    <br>

    <v-btn
      color="indigo-darken-3"
      to="/"
      variant="text"
    >
      {{ $t('go.to.main.page') }}
    </v-btn>
  </v-alert>
</template>

<route lang="yaml">
meta:
  layout: empty
</route>
