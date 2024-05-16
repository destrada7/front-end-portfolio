import React from 'react';
import Hero from './components/Hero';
import About from './components/AboutMe';
import Footer from './components/Footer';
import Projects from './components/Projects';
import ContactSection from './components/ContactSection';
import './App.css';

function App() {
  return (
      <div className='App'>
        <Hero />
        <About />
        <Projects />
        <ContactSection />
        <Footer />
      </div>
  );
}

export default App;
