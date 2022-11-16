import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { AppContext } from './hooks/useAppContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContext>
      <App/>
    </AppContext>
  </React.StrictMode>
)
