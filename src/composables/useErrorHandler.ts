import { useRouter } from '@/router'


export function useErrorHandler () {
  const router = useRouter()

  const handleError = (error: unknown): void => {
    console.error(error)
    void router.push('/error')
  }

  return {
    handleError,
  }
}
