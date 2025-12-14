import type { User } from '@/models/User'
import { useKeycloak } from '@dsb-norge/vue-keycloak-js'

class UserService {
  public getCurrentUser (): User {
    const keycloak = useKeycloak()

    return {
      avatar: keycloak.tokenParsed?.picture,
      fullName: keycloak.tokenParsed?.name,
      email: keycloak.tokenParsed?.email,
    }
  }
}

export const userService = new UserService()
