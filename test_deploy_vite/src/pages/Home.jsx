import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Contact from '../components/Contact';
import Footer from '../Components/Footer';
import About from '../components/About';
import MainComponents from '../components/MainComponents';
import ThreeComp from '../components/ThreeComp';
function Home() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <ThreeComp/>
        <About/>
        <MainComponents/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default Home