<template>
  <v-menu
    min-width="200px"
    rounded
  >
    <template #activator="{ props }">
      <v-btn
        icon
        v-bind="props"
      >
        <v-avatar
          icon="mdi-account-circle"
          :image="user.avatar"
          size="32"
        />
      </v-btn>
    </template>
    <v-card>
      <v-card-text>
        <div class="mx-auto text-center">
          <v-avatar
            icon="mdi-account-circle"
            :image="user.avatar"
          />
          <h3>{{ user.fullName }}</h3>
          <p class="text-caption mt-1">
            {{ user.email }}
          </p>
          <v-divider class="my-3" />
          <v-btn
            rounded
            variant="text"
            @click="keycloak.accountManagement()"
          >
            {{ $t('edit.profile') }}
          </v-btn>
          <v-divider class="my-3" />
          <v-btn
            rounded
            variant="text"
            @click="keycloak.logout()"
          >
            {{ $t('logout') }}
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue'
  import { userService } from '@/services/UserService'
  import type { User } from '@/models/User';

  const user = ref<User>({})

  onMounted(() => {
    user.value = userService.getCurrentUser()
  })
</script>
