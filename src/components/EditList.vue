<template>
  <v-card class="mx-auto" max-width="400">
    <v-list
      v-model:selected="settingsSelection"
      lines="three"
      select-strategy="leaf"
    >
      <v-list-subheader>{{ list.name }}</v-list-subheader>
      <v-list-item
        v-for="item in items"
        :key="item.id"
        :title="item.name"
        :value="item.name"
      >
        <template #prepend="{ isSelected, select }">
          <v-list-item-action start>
            <v-checkbox-btn :model-value="isSelected" @update:model-value="select" />
          </v-list-item-action>
        </template>
      </v-list-item>
    </v-list>
  </v-card>
</template>
<script lang="ts" setup>
  import { onMounted, ref, watch } from 'vue'
  import type { ListDto } from '@/models/ListDto'
  import { listService } from '@/services/ListService'
  import { itemService } from '@/services/ItemService'
  import { useRoute } from 'vue-router'
  import type { ItemDto } from '@/models/ItemDto'

  const list = ref<ListDto>({ id: '', name: '' })
  const items = ref<ItemDto[]>([])
  const route = useRoute()

  const loadListWithItems = async () => {
    const listId = getListId()

    listService.get(listId).then(data => {
      list.value = data
    })

    itemService.getAll(listId).then(data => {
      items.value = data
    })
  }

  const getListId = (): string => {
    if (route.name == '/lists/[id]') {
      return route.params.id
    } else {
      throw new Error(`Incorrect route - ${route.name}`)
    }
  }

  onMounted(() => loadListWithItems())
  watch(route, () => loadListWithItems())
  const settingsSelection = ref([])
</script>
