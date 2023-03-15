import './App.css';
import { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar'
import Home from '../Home/Home';
import Work from '../Work/Work';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../../components/Footer/Footer'


export default function App() {
  return (
    <main className="App">
      <NavBar />
      <Home />
      <Work />
      <About />
      <Contact />
      <Footer />  
    </main>
  );
}