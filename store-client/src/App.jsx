import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './layout'
import { ProductDetailPage } from './pages/ProductDetailPage'
import { ProductsPage } from './pages/ProductsPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='items' element={<ProductsPage/>} />
          <Route path='items/:id' element={<ProductDetailPage/>} />
        </Route>
      </Routes>
    </Router>
  )
}

export { App }