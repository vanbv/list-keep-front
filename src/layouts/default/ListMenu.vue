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
    item-title="name"
    item-value="name"
    :items="listMenu"
  />
</template>

<script lang="ts" setup>
  import { useLocale } from 'vuetify'
  import { onMounted, ref, watch } from 'vue'
  import { listService } from '@/services/ListService'
  import type { ListDto } from '@/models/ListDto.ts'
  import { useRoute } from 'vue-router'

  const { t } = useLocale()
  const listMenu = ref<ListDto[]>([])
  const route = useRoute()

  const loadLists = async () => {
    listService.getAll().then(lists => {
      listMenu.value = lists
    })
  }

  onMounted(() => {
    loadLists()
  })

  watch(route, () => loadLists())
</script>
