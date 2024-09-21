import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


import Home from './pages/Home';
import ContactUs from './components/Contact';


function App() {

  return (
   

        <Router>
            
            <Routes>

              <Route path='/' element={<Home/>} />
              <Route path='/contact' element={<ContactUs/>} />
              
            </Routes>

        </Router>


  );
}

export default App
