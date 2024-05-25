<template xmlns="http://www.w3.org/1999/html">
  <v-alert
      type="error"
      variant="outlined"
      :title="$t('oops.error.has.occurred')"
      :text="$t('please.try.again.later')"
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
