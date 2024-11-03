import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <h2 className="heading">About Me</h2>
      <p className="description">
        I am a passionate web developer with a focus on creating interactive, visually engaging experiences. I specialize in full-stack development, blending creativity with code.
      </p>
      <div className="skillsGrid">
        <div className="skillCard">JavaScript</div>
        <div className="skillCard">React</div>
        <div className="skillCard">Node.js</div>
        <div className="skillCard">Express</div>
        <div className="skillCard">MongoDB</div>
        <div className="skillCard">CSS & Animations</div>
      </div>
    </section>
  );
}


const styles = {
  about: {
    padding: '4rem 2rem',
    backgroundColor: '#f4f4f9',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1.2rem',
    maxWidth: '600px',
    margin: '0 auto 3rem',
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '1.5rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
skillCard: {
  padding: '1rem',
  backgroundColor: '#ffdd59',
  borderRadius: '10px',
  fontSize: '1rem',
  fontWeight: '600',
  color: '#333',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  cursor: 'pointer',
  ':hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
  },
}

};

export default About;
