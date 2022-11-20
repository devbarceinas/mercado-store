import { useLocation } from 'react-router-dom'
import { Product } from '../../components/Product'
import { When } from '../../components/When'
import { useFetchProducts } from '../../hooks/useFetchProducts'

import replace from 'lodash/fp/replace'
import split from 'lodash/fp/split'

import './styles.scss'

const parseQueryString = (query) => {
  const [, value] = split('=', replace('?', '', query))
  return value
} 

const ProductsPage = () => {
  const location = useLocation()
  const query = parseQueryString(location.search)
  const {products, loading} = useFetchProducts(query)

  return (
    <div className='productsContainer'>
      <section>
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