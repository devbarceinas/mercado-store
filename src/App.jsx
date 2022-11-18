import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './Layout'
import { SearchPage } from './pages/SearchPage'
import { ProductsPage } from './pages/ProductsPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index path='/items' element={<ProductsPage/>} />
          <Route path='/items:id' element={<SearchPage/>} />
        </Route>
      </Routes>
    </Router>
  )
}

export { App }