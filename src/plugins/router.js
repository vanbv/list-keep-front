import { useRoute } from 'vue-router'
import { watch } from 'vue'
import { updateToken } from '@/plugins/keycloak'

const route = useRoute()

export function setupRouteWatch() {
  watch(route, () => updateToken())
}
