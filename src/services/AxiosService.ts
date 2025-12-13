import axios, {
  type AxiosError,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios'

import { keycloakService } from '@/services/KeycloakService.ts'
import { useErrorHandler } from '@/composables/useErrorHandler'

const { handleError } = useErrorHandler()

class AxiosService {
  private static readonly AUTHORIZATION_HEADER = 'Authorization'

  public setupInterceptors (): void {
    axios.interceptors.request.use(
      async (config: InternalAxiosRequestConfig) => {
        const token = await keycloakService.updateToken()
        config.headers[AxiosService.AUTHORIZATION_HEADER] = `Bearer ${token}`
        return config
      }
    );

    axios.interceptors.response.use(
      (response: AxiosResponse) => {
        return response
      },
      (error: AxiosError) => {
        handleError(error)
        return Promise.reject(error);
      })
  }
}

export const axiosService = new AxiosService();
