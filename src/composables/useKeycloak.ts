import { keycloakService } from '@/services/KeycloakService'

export function useKeycloak () {
  const logout = () => keycloakService.logout()
  const accountManagement = () => keycloakService.accountManagement()

  return {
    logout,
    accountManagement,
  }
}
