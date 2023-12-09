import axios from 'axios'
import router from '../router'
import { updateToken } from '@/plugins/keycloak'

const AUTHORIZATION_HEADER = 'Authorization'

export function setupInterceptors() {
  axios.interceptors.request.use(async config => {
    const token = await updateToken()
    config.headers[AUTHORIZATION_HEADER] = `Bearer ${token}`
    return config
  })

  axios.interceptors.response.use( (response) => {
    return response
  }, error => {
    return new Promise((resolve, reject) => {
      router.push('/error')
      reject(error)
    })
  })
}
