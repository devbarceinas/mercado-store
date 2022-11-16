import { useEffect, useState } from "react"

const useGetData = (path) => {
  const [status, setStatus] = useState('idle')
  const [data, setData] = useState([])
  const [url, setUrL] = useState(path)

  useEffect(() => {
    const controller = new AbortController()
    fetchData()
    return () => controller.abort()
  }, [url])

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

  return {fetchData, data, status}
}

export { useGetData }