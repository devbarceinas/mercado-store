import { useEffect, useState } from "react"
import { getProducts } from "../services/getProducts"

const useFetchProducts = (nameProduct) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const executePreducts = async () => {
    const GET_PRODUCTS = await getProducts(nameProduct)
    setProducts(GET_PRODUCTS)
    setLoading(false)
  }

  useEffect(() => {
    executePreducts()
  }, [nameProduct])

  return { products, loading }
}

export { useFetchProducts }