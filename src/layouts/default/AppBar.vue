<template>
  <v-app-bar
    density="compact"
    elevation="2"
    flat
  >
    <v-app-bar-nav-icon variant="text" @click.stop="menu.toggleShow()" />
    <v-spacer />
    <UserMenu />
  </v-app-bar>
  <v-navigation-drawer
    v-model="menu.isShow"
    :location="$vuetify.display.mobile ? 'left' : undefined"
  >
    <ListMenu />
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
  import UserMenu from './UserMenu.vue'
  import ListMenu from './ListMenu.vue'
  import { ref } from 'vue'
  import { useDisplay } from 'vuetify'

  class Menu {
    isShow: boolean

    constructor (isShow: boolean) {
      this.isShow = isShow;
    }

    public toggleShow () {
      this.isShow = !this.isShow
    }
  }

  const { mobile } = useDisplay()

  const menu = ref(new Menu(!mobile.value))
</script>
