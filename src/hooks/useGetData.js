import { useEffect, useState } from "react"

const useGetData = (url) => {
  const [status, setStatus] = useState('idle')
  const [data, setData] = useState([])

  const fetchData = async () => {
    setStatus('fetching');

    const response = await fetch(url)
    const { results } = await response.json()

    if (results.length < 0) {
      setStatus('failed')
    } else {
      setData(results)
      setStatus('fetched')
    }
  }

  useEffect(() => {
    const controller = new AbortController()
    fetchData()
    return () => controller.abort()
  }, [])

  return {fetchData, data, status}
}

export { useGetData }