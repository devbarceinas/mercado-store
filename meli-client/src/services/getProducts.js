const API_URL = 'https://api.mercadolibre.com'
const getProducts = async (product) => {
  const path = `${API_URL}/sites/MLA/search?q=${product}&limit=4`
  const response = await fetch(path)
  const { results } = await response.json()
  const newData = results?.map(type => ({
    id: type?.id,
    title: type?.title,
    address: type?.address?.state_name,
    price: {
      currency: type?.prices?.prices[0].currency_id,
      amount: type?.prices?.prices[0].amount,
    },
    picture: type?.thumbnail,
    condition: type?.condition,
    free_shipping: type?.shipping?.free_shipping,
  }))

  return newData
}

export { 
  getProducts,
}