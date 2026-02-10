import React from 'react';
import projectsData from '../../Data/projects.json';

type Project = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
};

const ProjectCard: React.FC = () => {
  const projects: Project[] = projectsData.projects;

  return (
    <section className="projects-container">
      <div className="card-container">
        {projects.map((project) => (
          <div className="card" key={project.id}>
            <h2>{project.name}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectCard;
