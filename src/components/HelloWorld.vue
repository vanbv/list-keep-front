<template>
  <div>
    <p>{{ user.name }}</p>
  </div>
</template>

<script lang="ts" setup>

  import axios from 'axios'
  import { onMounted, ref } from 'vue'

  const user = ref({})

  onMounted(() => {
    axios.get('/api/user/current')
      .then(response => {
        user.value = response.data
      })
  })
</script>
