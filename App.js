import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <div className="about-section">
        <About />
      </div>
      <div className="projects-section">
        <Projects />
      </div>
      <div className="contact-section">
        <Contact />
      </div>
    </div>
  );
}

export default App;



