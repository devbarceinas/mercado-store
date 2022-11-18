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
    <section className='productContainer'>
      <img src={item?.picture} alt={item?.title} />
      <div>
        <p style={{fontWeight: 'bold'}}>$ {moneyFormat(item?.price?.amount)}</p>
        <p>{item?.title}</p>
      </div>
      <span>{item?.address}</span>
    </section>
  )
}

export { Product }    