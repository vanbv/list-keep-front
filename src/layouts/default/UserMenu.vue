<template>
  <v-menu
    min-width="200px"
    rounded
  >
    <template v-slot:activator="{ props }">
      <v-btn
        icon
        v-bind="props"
      >
        <v-avatar
          :image="user.avatar"
          icon="mdi-account-circle"
          size="32"
        ></v-avatar>
      </v-btn>
    </template>
    <v-card>
      <v-card-text>
        <div class="mx-auto text-center">
          <v-avatar
            :image="user.avatar"
            icon="mdi-account-circle"
          ></v-avatar>
          <h3>{{ user.fullName }}</h3>
          <p class="text-caption mt-1">
            {{ user.email }}
          </p>
          <v-divider class="my-3"></v-divider>
          <v-btn
            variant="text"
            rounded
            v-on:click="keycloak.accountManagement()"
          >
            {{ $t('edit.profile') }}
          </v-btn>
          <v-divider class="my-3"></v-divider>
          <v-btn
            variant="text"
            rounded
            v-on:click="keycloak.logout()"
          >
            {{ $t('logout') }}
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { keycloak } from '@/plugins/keycloak'

const user = ref({})

onMounted(() => {
  const token = keycloak.tokenParsed

  user.value = {
    avatar: token.picture,
    fullName: token.name,
    email: token.email
  }
})
</script>
