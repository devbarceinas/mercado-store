const getResults = (result) => ({
  id: result?.id,
  title: result?.title,
  price: {
    currency: "$",
    amount: parseInt(result?.price),
    decimals: parseFloat((result?.price % 1).toFixed(2)),
  },
  city: result?.address.city_name,
  picture: result?.thumbnail,
  condition: result?.condition,
  free_shipping: result?.shipping?.free_shipping,
})

const getOnceResult = (data, plainText) => ({
  id: data?.id,
  title: data?.title,
  price: {
    currency: "$",
    amount: parseInt(data?.price),
    decimals: parseFloat((data?.price % 1).toFixed(2)),
  },
  city: data?.seller_address.city.name,
  picture: data?.pictures[0].url,
  condition: data?.condition,
  free_shipping: data?.shipping.free_shipping,
  sold_quantity: data?.sold_quantity,
  description: plainText,
})

module.exports = {
  getResults,
  getOnceResult,
}