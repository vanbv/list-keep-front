<template>
  <div>
    <p>{{ user.name }}</p>
  </div>
</template>

<script lang="ts" setup>
  import axios from 'axios'
  import { onMounted, ref } from 'vue'

  interface User {
    name: string
  }

  const user = ref<User>({ name: '' })

  onMounted(() => {
    axios.get<User>('/api/user/current')
      .then(response => {
        user.value = response.data
      })
  })
</script>
