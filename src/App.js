import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/AboutMe';
import Footer from './components/Footer';
import Projects from './components/Projects';
import ContactSection from './components/ContactSection';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Projects />
              <ContactSection />
            </>
        } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
