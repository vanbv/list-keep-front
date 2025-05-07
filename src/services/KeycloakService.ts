import Keycloak, { type KeycloakTokenParsed } from 'keycloak-js';

class KeycloakService {
  private static readonly TOKEN_MIN_VALIDITY_SECONDS = 70;

  private readonly keycloak: Keycloak;

  constructor () {
    this.keycloak = new Keycloak({
      url: import.meta.env.VITE_KEYCLOAK_URL as string,
      realm: 'list-keep',
      clientId: 'list-keep',
    })
  }

  public async updateToken (): Promise<string> {
    await this.keycloak.updateToken(KeycloakService.TOKEN_MIN_VALIDITY_SECONDS);
    return this.keycloak.token!;
  }

  public login (onAuthenticatedCallback: () => void): void {
    this.keycloak.init({ onLoad: 'login-required' }).then(auth => {
      if (auth) {
        onAuthenticatedCallback();

        window.onfocus = () => {
          void this.updateToken();
        };
      } else {
        window.location.reload();
      }
    });
  }

  public getToken (): KeycloakTokenParsed | undefined {
    return this.keycloak.tokenParsed;
  }

  public logout (): Promise<void> {
    return this.keycloak.logout()
  }

  public accountManagement (): Promise<void> {
    return this.keycloak.accountManagement()
  }
}

export const keycloakService = new KeycloakService();
