'use client';
import React from 'react';
import Image from 'next/image';
import { useTranslation } from '@/app/context/LanguageContext';

interface Project {
  id: number;
  slug: string;
  technologies: string[];
  image: string;
  github: string;
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { t } = useTranslation();

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content project-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        
        <div className="project-image-container">
          <Image 
            src={project.image} 
            alt={project.slug} 
            width={800} 
            height={450} 
            priority
          />
        </div>

        <h2 className="modal-title">
          {t(`projects.items.${project.slug}.name`)}
        </h2>
        
        <p className="project-full-description">
          {t(`projects.items.${project.slug}.fullDescription`)}
        </p>

        <ul className="skills-list">
          {project.technologies.map((tech, index) => (
            <li key={index} className="skill-item">{tech}</li>
          ))}
        </ul>

        <div className="modal-footer">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
            {t('projects.view_github')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;