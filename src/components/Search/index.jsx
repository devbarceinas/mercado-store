import logo from '../../assets/images/Logo_ML.png'
import iconSearch from '../../assets/images/ic_Search.png'

import './styles.scss'

const Search = () => {
  return (
    <nav className='navContainer'>
      <img src={logo} alt="Logo ML" />
      <section className='inputContainer'>
        <input 
          type="text" 
          placeholder='Nunca dejes de buscar' 
          name='search'
        />
        <img src={iconSearch} alt="Icon Search" />
      </section>
    </nav>
  )
}

export { Search }