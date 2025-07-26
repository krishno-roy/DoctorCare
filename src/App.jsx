import React from 'react'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import Service from './Component/Service'
import About from "./Component/About";
import Contact from "./Component/Contact";
import Footer from './Component/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Service />
      <About />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App