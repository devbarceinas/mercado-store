import { createSearchParams, useNavigate } from 'react-router-dom'

import logo from '../../assets/images/Logo_ML.png'
import iconSearch from '../../assets/images/ic_Search.png'

import { useState } from 'react'

import './styles.scss'

const Search = () => {
  const [search, setSearch] = useState('')

  const navigate = useNavigate()

  const onSearch = event => {
    const { value } = event.target
    setSearch(value)
  }

  const handleSearch = event => {
    event.preventDefault()

    if (search !== '') {
      navigate({
        pathname: 'items',
        search: createSearchParams({
          search: search
        }).toString()
      })
    }
    
    setSearch('')
  }

  return (
    <nav className='navContainer'>
      <img src={logo} alt="Logo ML" />
      <section className='inputContainer'>
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
          onClick={handleSearch} />
      </section>
    </nav>
  )
}

export { Search }