import './styles.scss'

const moneyFormat = (value) => {
  const money = Intl.NumberFormat(
    'es-AR',
    {
      styles: 'currency',
      currency: 'ARS'
    }
  ).format(value)
  return money
}

const Product = ({ item }) => {
  return (
    <div className='productContainer'>
      <div>
        <img src={item?.picture} alt={item?.title} />
        <div className='info'>
          <p style={{fontWeight: 'bold'}}>$ {moneyFormat(item?.price?.amount)}</p>
          <p>{item?.title}</p>
        </div>
      </div>
      <div className='address'>
        <p>{item?.address}</p>
      </div>
    </div>
  )
}

export { Product }    