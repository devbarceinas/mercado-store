import { useNavigate } from 'react-router-dom'
import { moneyFormat } from '../../utils/utils'
import { When } from '../../components/When'
import shipping from '../../assets/images/ic_shipping.png'

import './styles.scss'

const Product = ({ item }) => {
  const navigate = useNavigate()

  return (
    <div className='productContainer' onClick={() => navigate(item?.id)}>
      <div>
        <img src={item?.picture} alt={item?.title} />
        <div className='info'>
          <p className='infoPrice'>
            $ {moneyFormat(item?.price?.amount)}
            <When predicate={item?.free_shipping}>
              <img className='shipping' src={shipping} />
            </When>
          </p>
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