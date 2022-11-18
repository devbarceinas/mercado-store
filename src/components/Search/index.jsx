import { useContext, useEffect, useState } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'
import { Context } from '../../hooks/useAppContext'

import logo from '../../assets/images/Logo_ML.png'
import iconSearch from '../../assets/images/ic_Search.png'

import './styles.scss'

const Search = () => {
  const { dispatch } = useContext(Context)
  const [search, setSearch] = useState('')

  const navigate = useNavigate()
 
  const onSearch = event => {
    const { value } = event.target
    setSearch(value)
  }

  const handleSearch = (event) => {
    event.preventDefault()
    if (search !== '') {
      dispatch({ type: 'setProduct', payload: search })
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
      <img src={logo} alt="Logo ML" />
      <form onSubmit={handleSearch} className='inputContainer'>
        <input 
          type="text" 
          placeholder='Nunca dejes de buscar' 
          name='search'
          value={search}
          onChange={onSearch}
        />
        <img 
          src={iconSearch} 
          alt="Icon Search" 
        />
      </form>
    </nav>
  )
}

export { Search }