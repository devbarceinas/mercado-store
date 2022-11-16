import { createContext, useReducer, useContext } from 'react'
import { reducer } from './utils'

const Context = createContext()
const useAppContext = () => useContext(Context)

const initialState = {
  product: {},
}

const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  const values = {
    state,
    dispatch,
  }

  return (
    <Context.Provider value={values}>
      {children}
    </Context.Provider>
  )
}

export { 
  AppContext,
  Context,
  useAppContext,
}