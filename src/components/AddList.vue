<template>
  <v-card
    flat
    :max-width="mobile ? undefined : '350'"
  >
    <v-form v-model="isFormValid" @submit.prevent="createList">
      <v-card-text>
        <v-text-field
          v-model.trim="list.name"
          maxlength="20"
          :placeholder="t('list.name')"
          :rules="rules"
          variant="plain"
        />
      </v-card-text>

      <v-card-actions>
        <v-btn
          block
          class="text-none"
          color="primary"
          :disabled="!isFormValid"
          :text="t('create')"
          type="submit"
          variant="flat"
        />
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script lang="ts" setup>
  import { useDisplay, useLocale } from 'vuetify'
  import { listService } from '@/services/ListService'
  import { ref } from 'vue'
  import { useRouter } from '@/router'
  import { useRules } from 'vuetify/labs/rules'
  import type { ListCreateDto } from '@/models/ListCreateDto'
  import { useSnackbarStore } from '@/stores/snackbar'
  const snackbar = useSnackbarStore()

  const { t } = useLocale()
  const { mobile } = useDisplay()
  const router = useRouter()
  const list = ref<ListCreateDto>({ name: '' })
  const rules = useRules(() => ['required'])
  const isFormValid = ref(false)

  function createList () {
    if (isFormValid.value) {
      listService.create(list.value).then(() => {
        snackbar.showMessage(t('list.created'))
        router.push('/')
      })
    }
  }
</script>
