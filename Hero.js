import React, { useEffect } from 'react';
import gsap from 'gsap';

function Hero() {
  useEffect(() => {
    // Animating shapes with a subtle floating effect
    gsap.to('.shape', {
      y: 20,
      duration: 3,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
    });
  }, []);

  return (
    <section style={styles.hero}>
      <div style={styles.content}>
        <h1 style={styles.title}>Exploring Creativity</h1>
        <p style={styles.subtitle}>Where Design Meets Code</p>
        <a href="#projects" style={styles.button}>Discover More</a>
      </div>
      {/* Abstract Shapes for Collage Effect */}
      <div style={styles.shapesContainer}>
        <div className="shape" style={{ ...styles.shape, ...styles.circle, top: '10%', left: '10%' }}></div>
        <div className="shape" style={{ ...styles.shape, ...styles.square, top: '50%', right: '15%' }}></div>
        <div className="shape" style={{ ...styles.shape, ...styles.circle, bottom: '10%', left: '30%' }}></div>
        <div className="shape" style={{ ...styles.shape, ...styles.triangle, bottom: '20%', right: '20%' }}></div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #ff9a9e, #fad0c4, #fad0c4)',
    color: '#fff',
    textAlign: 'center',
    overflow: 'hidden',
  },
  content: {
    position: 'relative',
    zIndex: 2,  // Ensures content appears above background elements
  },
  title: {
    fontSize: '4rem',
    fontWeight: 'bold',
    margin: '0 0 1rem',
    lineHeight: '1.2',
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
  },
  button: {
    display: 'inline-block',
    padding: '0.75rem 1.5rem',
    backgroundColor: '#333',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
    cursor: 'pointer',
  },
  shapesContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    zIndex: 1,  // Positioned behind content but above background
  },
  shape: {
    position: 'absolute',
    opacity: 0.4,
    transform: 'rotate(15deg)',
  },
  circle: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    backgroundColor: '#ff6f61',
  },
  square: {
    width: '100px',
    height: '100px',
    backgroundColor: '#ffdd59',
    transform: 'rotate(45deg)',
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeft: '50px solid transparent',
    borderRight: '50px solid transparent',
    borderBottom: '100px solid #6c5ce7',
  },
};

export default Hero;
