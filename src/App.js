import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import { AuthProvider } from './context/providers/AuthContext'
import { ProductProvider } from './context/providers/ProductsContext'
import { CartProvider } from './context/providers/CartContext'

//Components
import Menu from './pages/menu/Menu';
import Navbar from './components/ui/Navbar/Navbar'
import Footer from './components/ui/Footer/Footer'
import HomePage from './pages/home/HomePage'
import ProductForm from './pages/products/ProductForm';
import Signup from './pages/auth/Signup';
import Signin from './pages/auth/Signin';
import CartPage from './pages/cart/CartPage';
import Reserva from './pages/reservas/Reserva';
import Nosotros from './pages/nosotros/Nosotros';
import Servicios from './pages/servicios/Servicios';


function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <Navbar />
          <ProductProvider>
            <Routes>
                <Route path='/' exact element={<HomePage />} />
                <Route path='/nosotros' exact element={<Nosotros />} />
                <Route path='/servicios' exact element={<Servicios />} />
                <Route path='/menu' element={<Menu />} />
                <Route path='/products/new' element={<ProductForm />} />
                <Route path='/auth/signup' element={<Signup />} />
                <Route path='/auth/signin' element={<Signin />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path='/reserva' element={<Reserva />} />
            </Routes>
          </ProductProvider>
        </CartProvider>
        <Toaster />
      </AuthProvider>
      <Footer />
    </Router>
  );
}

export default App;

