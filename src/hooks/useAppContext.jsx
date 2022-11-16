import { createContext, useContext, useReducder } from 'react'

const Context = createContext()
const useAppContext = () => useContext(Context)

const initialState = {
  product: '',
}

const AppContext = ({ children }) => {
  const [state, dispatch] = useReducder(appReducer, initialState)
  
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