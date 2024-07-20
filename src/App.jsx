import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Nav from './components/Nav';
import Contact from './components/Contact';
import About from './components/About';
import Company from './components/Company';
import OurTeam from './components/OurTeam';
import Testimonial from './components/Testimonial ';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Company />
        <About />
        <OurTeam />
        <Contact />
        <Testimonial />
        <Footer />
      </div>
    </Router>
  );
};

export default App;