import React, { useEffect } from 'react';
import './Projects.css';
import gsap from 'gsap';

function Projects() {
  const projects = [
    { title: 'Project One', description: 'An amazing project that solves problems.' },
    { title: 'Project Two', description: 'A creative solution for modern challenges.' },
    { title: 'Project Three', description: 'An innovative app for daily tasks.' },
    { title: 'Project Four', description: 'A beautiful design for better UX.' },
  ];

  useEffect(() => {
    gsap.utils.toArray('.project-card').forEach((card, i) => {
      gsap.fromTo(card, 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, delay: i * 0.2, duration: 0.8, ease: 'power3.out' }
      );
    });
  }, []);

  return (
    <section className="projects" id="projects">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a href="#" className="project-link">View More</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
