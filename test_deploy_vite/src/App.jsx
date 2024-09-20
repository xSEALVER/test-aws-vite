import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { CartProvider } from './context/CartContext';  // Import CartProvider


import Home from './pages/Home';


function App() {

  return (
   
    <CartProvider>  {/* Wrap the app in CartProvider */}

        <Router>
            
            <Routes>
              <Route path='/' element={<Home/>} />
              
            </Routes>

        </Router>

    </CartProvider>

  );
}

export default App
