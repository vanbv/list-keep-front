<template>
  <v-btn
    class="text-none ma-3"
    prepend-icon="mdi-plus"
    rounded
    to="/lists/add"
  >
    {{ t('new.list') }}
  </v-btn>
  <v-list
    :items="listMenu"
  />
</template>

<script lang="ts" setup>
  import { useLocale } from 'vuetify'
  import { onMounted, ref } from 'vue'

  interface ListItem {
    title: string,
    value: string
  }

  const { t } = useLocale()
  const listMenu = ref<ListItem[]>([])

  onMounted(() => {
    listMenu.value = [
      {
        title: 'Foo',
        value: 'foo',
      },
      {
        title: 'Bar',
        value: 'bar',
      },
      {
        title: 'Fizz',
        value: 'fizz',
      },
      {
        title: 'Buzz',
        value: 'buzz',
      },
    ]
  })
</script>
