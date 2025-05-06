<template>
  <v-btn
    class="text-none ma-3"
    prepend-icon="mdi-plus"
    rounded
    to="/lists/add"
  >
    {{ $t('new.list') }}
  </v-btn>
  <v-list
    :items="listMenu.items"
  />
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue'

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
      ],
    }
  })
</script>
