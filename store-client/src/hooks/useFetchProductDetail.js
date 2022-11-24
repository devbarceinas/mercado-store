import { useEffect, useState } from "react"
import { getProductDetail } from "../services/getProducts"

const useFetchProductDetail = (id) => {
  const [detail, setDetail] = useState([])
  const [loading, setLoading] = useState(true)

  const executePreductDetail = async () => {
    try {
      const { response } = await getProductDetail(id)
      const { items } = response.data
      console.log(items)
      setDetail(items)
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    executePreductDetail()
  }, [id])


  return { detail, loading }
}

export { useFetchProductDetail }