// App.js
import React, { useRef } from 'react';
import Hero from './components/Hero';
import About from './components/AboutMe';
import Footer from './components/Footer';
import Projects from './components/Projects';
import ContactSection from './components/ContactSection';
import './App.css';

function App() {
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='App'>
      <Hero scrollToProjects={scrollToProjects} />
      <About scrollToContact={scrollToContact} />
      <Projects ref={projectsRef} />
      <ContactSection ref={contactRef} />
      <Footer />
    </div>
  );
}

export default App;
