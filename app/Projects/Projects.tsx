'use client';
import React, { useEffect, useRef, useState } from 'react';
import projectsData from '../../Data/projects.json';

type Project = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
};

const ProjectCard: React.FC = () => {
  const projects: Project[] = projectsData.projects;
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Force initial scroll to 0 to ensure first card is visible
    container.scrollTo({ left: 0, behavior: 'auto' });

    const handleScroll = () => {
      const cardElements = container.querySelectorAll('.card');
      if (cardElements.length === 0) return;

      const cardWidth = cardElements[0].offsetWidth;
      const gap = parseFloat(getComputedStyle(container).gap) || 20;
      const paddingLeft = parseFloat(getComputedStyle(container).paddingLeft) || 0;
      const itemWidth = cardWidth + gap;

      // Adjust scrollLeft by paddingLeft
      const newIndex = Math.round((container.scrollLeft + paddingLeft) / itemWidth);
      setActiveIndex(Math.max(0, Math.min(newIndex, cardElements.length - 1)));
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [projects.length]);

  const scrollToCard = (index: number) => {
    const container = containerRef.current;
    if (!container) return;

    const cardElements = container.querySelectorAll('.card');
    if (cardElements.length === 0) return;

    const cardWidth = cardElements[0].offsetWidth;
    const gap = parseFloat(getComputedStyle(container).gap) || 20;
    const paddingLeft = parseFloat(getComputedStyle(container).paddingLeft) || 0;
    const itemWidth = cardWidth + gap;

    container.scrollTo({
      left: index * itemWidth - paddingLeft,
      behavior: 'smooth',
    });
  };

  return (
    <section className="projects-container">
      <h1>My Projects</h1>
      <div className="card-container" ref={containerRef}>
        {projects.map((project) => (
          <div className="card" key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <ul className="technologies">
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="dots-container">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`dot ${activeIndex === index ? 'active' : ''}`}
            onClick={() => scrollToCard(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectCard;