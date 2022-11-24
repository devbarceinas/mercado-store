import { useEffect, useState } from "react"
import { getProducts } from "../services/getProducts"

const useFetchProducts = (nameProduct) => {
  const [products, setProducts] = useState([])
  const [typeCategories, setTypeCatagories] = useState([])
  const [loading, setLoading] = useState(true)

  const executePreducts = async () => {
    try {
      const { response } = await getProducts(nameProduct)
      const { items, categories } = response?.data
      setProducts(items)
      setTypeCatagories(categories)
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    executePreducts()
  }, [nameProduct])


  return { products, typeCategories, loading }
}

export { useFetchProducts }