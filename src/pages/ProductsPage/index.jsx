import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { Product } from '../../components/Product'
import { When } from '../../components/When'
import { Context } from '../../hooks/useAppContext'
import { useFetchProducts } from '../../hooks/useFetchProducts'

import replace from 'lodash/fp/replace'
import split from 'lodash/fp/split'

import './styles.scss'

// const parseQueryString = (query) => {
//   const [, value] = split('=', replace('?', '', query))
//   return value
// }

const ProductsPage = () => {
  const { state: { product } } = useContext(Context)
  const location = useLocation()
  // const query = parseQueryString(location.search)
  const {products, loading} = useFetchProducts(product)

  return (
    <div className='productsContainer'>
      <section className='cardContainer'>
        <When predicate={loading}>
          <p>Cargando...</p>
        </When>
        {products?.map(item => (
          <Product key={item?.id} item={item} />
        ))}
      </section>
    </div>
  )
}

export { ProductsPage }