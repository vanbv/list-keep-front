<template>
  <v-container
      class="text-center"
      fill-height
      style="height: calc(100vh - 58px);"
  >
    <v-row align="center">
      <v-col>
        <h1 class="display-2 primary--text">{{ $t('whoops.404') }}</h1>

        <p>{{ $t('page.you.looking.for.does.not.exist') }}</p>

        <v-btn
            href="/"
            color="primary"
            outlined
        >
          {{ $t('go.to.main.page') }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>