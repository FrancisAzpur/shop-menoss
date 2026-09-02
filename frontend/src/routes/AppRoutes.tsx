import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Productos from '../pages/Productos'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Carrito from '../pages/Carrito'
import NotFound from '../pages/NotFound'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Register />} />
      <Route path="/carrito" element={<Carrito />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes