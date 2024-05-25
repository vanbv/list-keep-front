<template xmlns="http://www.w3.org/1999/html">
  <v-alert
      type="error"
      variant="outlined"
      :title="$t('whoops.404')"
      :text="$t('page.you.looking.for.does.not.exist')"
  >
    <br/>

    <v-btn
      href="/"
      variant="text"
      color="indigo-darken-3"
    >
      {{ $t('go.to.main.page') }}
    </v-btn>
  </v-alert>
</template>

<route lang="yaml">
meta:
  layout: empty
</route>
