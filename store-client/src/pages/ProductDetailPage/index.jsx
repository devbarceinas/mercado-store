import { useParams } from 'react-router-dom'
import { Container } from '../../components/Container'
import { useFetchProductDetail } from '../../hooks/useFetchProductDetail'
import { When } from '../../components/When'
import { Loading } from '../../components/Loading'
import { Detail } from '../../components/Detail'
import { Helmet } from 'react-helmet'

const ProductDetailPage = () => {
  const { id } = useParams()
  const { detail, loading } = useFetchProductDetail(id)
  
  return (
    <Container>
        <When predicate={loading}>
          <Loading/>
        </When>
        <When predicate={loading === false}>
          <Detail detail={detail} />
        </When>
    </Container>
  )
}

export { ProductDetailPage } 