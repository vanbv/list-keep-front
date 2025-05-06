import type { User } from '@/models/User';
import { keycloakService } from '@/services/KeycloakService'

class UserService {
  public getCurrentUser (): User {
    const token = keycloakService.getToken()
    return {
      avatar: token?.picture,
      fullName: token?.name,
      email: token?.email,
    }
  }
}

export const userService = new UserService();
