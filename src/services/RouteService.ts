import { useRoute } from 'vue-router'
import { watch } from 'vue'
import { keycloakService } from '@/services/KeycloakService'

class RouteService {
  private readonly route = useRoute();

  public setupRouteWatch (): void {
    watch(this.route, () => keycloakService.updateToken())
  }
}

export const routeService = new RouteService();
