import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './Layout'
import { SearchPage } from './pages/SearchPage'
import { ProductsDetails } from './pages/ProductsPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/items' element={<SearchPage/>} />
          <Route path='/items:id' element={<ProductsDetails/>} />
        </Route>
      </Routes>
    </Router>
  )
}

export { App }