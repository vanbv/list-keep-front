<template>
  <v-card
    class="mt-2"
    :class="mobile ? 'mx-auto' : 'ml-md-2'"
    :max-width="400"
  >
    <v-list
      v-model:selected="settingsSelection"
      class="py-0"
      select-strategy="leaf"
    >
      <v-list-subheader>
        <debounce-text-field
          v-model="list.name"
          hide-details
          maxlength="20"
          :on-change="updateList"
          :placeholder="t('list.name')"
          variant="plain"
        />
      </v-list-subheader>
      <template v-for="item in items" :key="item.id">
        <v-divider />
        <v-list-item
          :title="item.name"
          :value="item.id"
        >
          <template #prepend="{ isSelected, select }">
            <v-list-item-action start>
              <v-checkbox-btn :model-value="isSelected" @update:model-value="select" />
            </v-list-item-action>
          </template>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>
<script lang="ts" setup>
  import { onMounted, ref, watch } from 'vue'
  import { useDisplay, useLocale } from 'vuetify'
  import { listService } from '@/services/ListService'
  import { itemService } from '@/services/ItemService'
  import { useRoute } from 'vue-router'
  import type { ItemDto } from '@/models/ItemDto'
  import type { ListUpdateDto } from '@/models/ListUpdateDto'
  import DebounceTextField from '@/components/DebounceTextField.vue'

  const { mobile } = useDisplay()
  const { t } = useLocale()

  const list = ref<ListUpdateDto>({ name: '' })
  const items = ref<ItemDto[]>([])
  const route = useRoute()

  const getListId = (): string => {
    if (route.name == '/lists/[id]') {
      return route.params.id
    } else {
      throw new Error(`Incorrect route - ${route.name}`)
    }
  }

  const listId = getListId()

  const loadListWithItems = async () => {
    listService.get(listId).then(data => {
      list.value = { name: data.name }
    })

    itemService.getAll(listId).then(data => {
      items.value = data
    })
  }

  function updateList () {
    listService.update(listId, list.value)
  }

  onMounted(() => loadListWithItems())
  watch(route, () => loadListWithItems())
  const settingsSelection = ref([])
</script>

<style>
  .v-list-subheader__text {
    width: 100%;
  }
</style>
