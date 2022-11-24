import { useParams } from 'react-router-dom'
import { Container } from '../../components/Container'
import { useFetchProductDetail } from '../../hooks/useFetchProductDetail'
import { moneyFormat } from '../../utils/utils'
import { When } from '../../components/When'
import { Loading } from '../../components/Loading'

import './styles.scss'

const ProductDetailPage = () => {
  const { id } = useParams()
  const { detail, loading } = useFetchProductDetail(id)

  const onBuy = (event) => {
    event.preventDefault()
    alert(`${detail?.title} - agregado al carrito!`)
  }
  
  return (
    <Container>
        <When predicate={loading}>
          <Loading/>
        </When>
        <When predicate={loading === false}>
          <div className='detailProduct'>
            <img src={detail?.picture}/>
            <div>
              <span>{detail?.condition === 'new' ? 'Nuevo' : 'Usado'} - {detail?.sold_quantity} vendidos</span>
              <p>{detail?.title}</p>
              <h2>{detail?.price?.currency} {moneyFormat(detail?.price?.amount)}</h2>
              <button onClick={onBuy}>Comprar</button>
            </div>
          </div>
          <section className='detailDescription'>
            <article>Descripción del producto</article>
            <p>{detail?.description}</p>
          </section>
        </When>
    </Container>
  )
}

export { ProductDetailPage } 