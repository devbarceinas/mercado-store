import { useContext, useState } from 'react'
import { createSearchParams, useNavigate, Link } from 'react-router-dom'

import logo from '../../assets/images/Logo_ML.png'
import iconSearch from '../../assets/images/ic_Search.png'

import './styles.scss'

const Search = () => {
  const [search, setSearch] = useState('')

  const navigate = useNavigate()
 
  const onSearch = event => {
    const { value } = event.target
    setSearch(value)
  }

  const handleSearch = (event) => {
    event.preventDefault()
    if (search !== '') {
      navigate({
        pathname: 'items',
        search: createSearchParams({
          search: search
        }).toString()
      })
    }
  }

  return (
    <nav className='navContainer'>
      <Link to='/'>
        <img src={logo} alt="Logo ML" />
      </Link>
      <form onSubmit={handleSearch} className='form'>
        <input 
          type="text" 
          placeholder='Nunca dejes de buscar' 
          name='search'
          value={search}
          onChange={onSearch}
        />
        <input
          type="image" 
          src={iconSearch} 
        />
      </form>
    </nav>
  )
}

export { Search }