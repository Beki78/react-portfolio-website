import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route,Routes, Link } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service';
import Contact from './pages/Contact';
import Footer from './components/Footer';



function App() {


  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App
