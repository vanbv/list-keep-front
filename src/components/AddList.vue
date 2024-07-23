<template>
  <v-card
    flat
    :max-width="$vuetify.display.mobile ? undefined : '350'"
  >
    <v-card-text>
      <v-text-field
        :placeholder="$t('list.name')"
        variant="plain"
        maxLength="20"
      ></v-text-field>
    </v-card-text>

    <v-card-actions>
      <v-btn
        class="text-none"
        color="primary"
        :text="$t('create')"
        variant="flat"
        block
      ></v-btn>
    </v-card-actions>
  </v-card>
</template>
