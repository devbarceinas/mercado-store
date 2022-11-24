import { moneyFormat } from '../../utils/utils'

import './styles.scss'

const Detail = ({ detail }) => {
  const onBuy = (event) => {
    event.preventDefault()
    alert(`${detail?.title} - agregado al carrito!`)
  }
  
  return (
    <>
      <div className='detailProduct'>
        <img src={detail?.picture}/>
        <div>
          <span>{detail?.condition === 'new' ? 'Nuevo' : 'Usado'} - {detail?.sold_quantity} vendidos</span>
          <p className='title'>{detail.title}</p>
          <h2>{detail?.price?.currency} {moneyFormat(detail?.price?.amount)}</h2>
          <button onClick={onBuy}>Comprar</button>
        </div>
      </div>
      <section className='detailDescription'>
        <article>Descripción del producto</article>
        <p>{detail?.description}</p>
      </section>
    </>
  )
}

export { Detail }