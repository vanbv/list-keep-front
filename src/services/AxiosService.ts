import axios, {
  type AxiosError,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios'

import { useKeycloak } from '@dsb-norge/vue-keycloak-js'

import { useErrorHandler } from '@/composables/useErrorHandler'

const { handleError } = useErrorHandler()

class AxiosService {
  private static readonly AUTHORIZATION_HEADER = 'Authorization'

  public setupInterceptors (): void {
    axios.interceptors.request.use(
      async (config: InternalAxiosRequestConfig) => {
        const keycloak = useKeycloak()

        if (keycloak.authenticated) {
          config.headers[AxiosService.AUTHORIZATION_HEADER] = `Bearer ${keycloak.token}`
        }

        return config
      }
    )

    axios.interceptors.response.use(
      (response: AxiosResponse) => {
        return response
      },
      (error: AxiosError) => {
        handleError(error)
        return Promise.reject(error)
      })
  }
}

export const axiosService = new AxiosService()
