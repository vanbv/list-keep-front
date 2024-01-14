<template>
  <div>
    <p>{{ user.name }}</p>
  </div>
</template>

<script setup>

import axios from 'axios'
import { ref, onMounted } from 'vue'

const user = ref({})

onMounted(() => {
  axios.get('/api/user/current')
    .then(response => {
      user.value = response.data
    })
})
</script>
