import { useContext } from 'react'
import { Context } from '../../hooks/useAppContext'
import { useGetData } from '../../hooks/useGetData'

const API_URL = 'https://api.mercadolibre.com'

const Product = () => {
  const { state: { product } } = useContext(Context)
  const {data, status} = useGetData(`${API_URL}/sites/MLA/search?q=${product}`)

  console.log(data)

  return (
    <article>
      <section>Product</section>
    </article>
  )
}

export { Product }    