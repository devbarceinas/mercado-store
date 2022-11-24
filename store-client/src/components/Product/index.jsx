import { useNavigate } from 'react-router-dom'
import { moneyFormat } from '../../utils/utils'

import './styles.scss'

const Product = ({ item }) => {
  const navigate = useNavigate()

  return (
    <div className='productContainer' onClick={() => navigate(item?.id)}>
      <div>
        <img src={item?.picture} alt={item?.title} />
        <div className='info'>
          <p className='infoPrice'>$ {moneyFormat(item?.price?.amount)}</p>
          <p>{item?.title}</p>
        </div>
      </div>
      <div className='address'>
        <p>{item?.city}</p>
      </div>
    </div>
  )
}

export { Product }    