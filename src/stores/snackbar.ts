import { defineStore } from 'pinia'

interface SnackbarState {
  message: string,
  show: boolean
}

export const useSnackbarStore = defineStore('snackbar', {
  state: (): SnackbarState => ({
    message: '',
    show: false,
  }),
  actions: {
    showMessage (message: string) {
      this.message = message
      this.show = true
    },
  },
})
