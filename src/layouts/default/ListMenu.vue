<template>
  <v-btn
    prepend-icon="mdi-plus"
    rounded
    class="text-none ma-3"
    to="/lists/add"
  >
    {{ $t('new.list') }}
  </v-btn>
  <v-list
    :items="listMenu.items"
  ></v-list>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const listMenu = ref({})


onMounted(() => {
  listMenu.value = {
    items: [
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
  }
})
</script>
