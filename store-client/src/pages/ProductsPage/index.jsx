import { useLocation } from 'react-router-dom'
import { Product } from '../../components/Product'
import { Categories } from '../../components/Categories'
import { When } from '../../components/When'
import { Container } from '../../components/Container'
import { useFetchProducts } from '../../hooks/useFetchProducts'
import { parseQueryString } from '../../utils/utils'
import { Loading } from '../../components/Loading'

const ProductsPage = () => {
  const location = useLocation()
  const query = parseQueryString(location.search)
  const {products, typeCategories, loading} = useFetchProducts(query)

  return ( 
    <>
      <Categories typeCategories={typeCategories} />
      <Container>
        <When predicate={loading}>
          <Loading/>
        </When>
        {products?.map(item => (
          <Product key={item?.id} item={item} />
        ))}
      </Container>
    </>
  )
}

export { ProductsPage }