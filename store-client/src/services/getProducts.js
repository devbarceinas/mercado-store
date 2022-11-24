import axios from 'axios'

const API_URL = 'http://localhost:8081'

const getProducts = async (product) => {
  const path = `${API_URL}/api/items?q=${product}`
  const response = await axios.get(path)
  return { response }
}

const getProductDetail = async (id) => {
  const path = `${API_URL}/api/items/${id}`
  const response = await axios.get(path)
  return { response }
}

export { 
  getProducts,
  getProductDetail,
}