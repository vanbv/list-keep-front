import axios, {
  type AxiosError,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios'
import { useRouter } from '@/router'
import { keycloakService } from '@/services/KeycloakService.ts'

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
        const router = useRouter()
        void router.push('/error');
        return Promise.reject(error);
      })
  }
}

export const axiosService = new AxiosService();
