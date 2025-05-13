<template>
  <v-card
    flat
    :max-width="mobile ? undefined : '350'"
  >
    <v-card-text>
      <v-text-field
        v-model="list.name"
        max-length="20"
        :placeholder="t('list.name')"
        :rules="[rules.required()]"
        variant="plain"
      />
    </v-card-text>

    <v-card-actions>
      <v-btn
        block
        class="text-none"
        color="primary"
        :text="t('create')"
        variant="flat"
        @click="createList"
      />
    </v-card-actions>
  </v-card>
</template>

<script lang="ts" setup>
  import { useDisplay, useLocale, type ValidationRule } from 'vuetify'
  import { listService } from '@/services/ListService';
  import { ref } from 'vue';
  import router from '@/router';
  import { useRules } from 'vuetify/labs/rules'
  import type { ListCreateDto } from '@/models/ListCreateDto';

  const { t } = useLocale()
  const { mobile } = useDisplay()
  const list = ref<ListCreateDto>({ name: '' });
  const rules = useRules() as { required: () => ValidationRule }
  function createList () {
    listService.create(list.value).then(() => {
      router.push('/');
    })
  }
</script>
