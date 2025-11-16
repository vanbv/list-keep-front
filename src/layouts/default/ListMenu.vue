<template>
  <v-btn
    class="text-none ma-3"
    prepend-icon="mdi-plus"
    rounded
    to="/lists/add"
  >
    {{ t('new.list') }}
  </v-btn>
  <v-list>
    <v-list-item
      v-for="listItem in lists"
      :key="listItem.id"
      :title="listItem.name"
      :to="`/lists/${listItem.id}`"
      :value="listItem.name"
    />
  </v-list>
</template>

<script lang="ts" setup>
  import { useLocale } from 'vuetify'
  import { onMounted, ref, watch } from 'vue'
  import { listService } from '@/services/ListService'
  import type { ListDto } from '@/models/ListDto.ts'
  import { useRoute } from 'vue-router'

  const { t } = useLocale()
  const lists = ref<ListDto[]>([])
  const route = useRoute()

  const loadLists = async () => {
    listService.getAll().then(data => {
      lists.value = data
    })
  }

  onMounted(() => loadLists())
  watch(route, () => loadLists())
</script>
