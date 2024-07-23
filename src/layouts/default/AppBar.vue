<template>
  <v-app-bar
    flat
    density="compact"
    elevation="2"
  >
    <v-app-bar-nav-icon variant="text" @click.stop="menu.toggleShow()"></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <UserMenu />
  </v-app-bar>
  <v-navigation-drawer
    v-model="menu.isShow"
    :location="$vuetify.display.mobile ? 'left' : undefined"
  >
    <ListMenu />
  </v-navigation-drawer>
</template>

<script setup>
import UserMenu from './UserMenu.vue'
import ListMenu from './ListMenu.vue'
import { ref } from 'vue'

import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()

const menu = ref(
  {
    isShow: !mobile.value,
    toggleShow: function () {
      this.isShow = !this.isShow
    }
  }
)

</script>
