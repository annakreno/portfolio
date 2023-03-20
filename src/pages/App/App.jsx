import './App.css';
import { useState } from 'react';
import { Link, Element } from 'react-scroll';
import NavBar from '../../components/NavBar/NavBar'
import Home from '../Home/Home';
import Work from '../Work/Work';
import About from '../About/About';   
import Contact from '../Contact/Contact';
import Footer from '../../components/Footer/Footer'

export default function App() {
  return (
    <main className="App">
      <Element name="home">
        <NavBar />
      </Element>
      <Home />
      
      <Element name="work">
        <Work />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </main>
  );
}