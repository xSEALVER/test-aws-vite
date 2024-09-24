import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './pages/Home';
import ContactUs from './components/Contact';
import "aos/dist/aos.css";
import React from 'react';
import AOS from "aos";





function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

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
