import { useEffect, useState } from 'react'

export default function useApi<T>(apiFn: () => Promise<T>): UseApiResult<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    apiFn()
      .then((res) => {
        setData(res)
      })
      .catch((err) => {
        setError(err.message || 'Errore sconosciuto')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [apiFn])

  return { data, loading, error }
}
