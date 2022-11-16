import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './Layout'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>} />
      </Routes>
    </Router>
  )
}

export { App }