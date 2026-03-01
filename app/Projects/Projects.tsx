"use client";
import React, { useEffect, useRef, useState } from "react";
import projectsData from "../../Data/projects.json";
import { useTranslation } from "../../app/context/LanguageContext";
import ProjectModal from "./ProjectModal";

interface Project {
  id: number;
  slug: string;
  technologies: string[];
  image: string;
  github: string;
}

export default function Projects() {
  const projects: Project[] = projectsData.projects;
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cardElements = container.querySelectorAll(".card");
      if (cardElements.length === 0) return;
      const cardWidth = (cardElements[0] as HTMLElement).offsetWidth;
      const gap = 20;
      const newIndex = Math.round(container.scrollLeft / (cardWidth + gap));
      setActiveIndex(Math.max(0, Math.min(newIndex, cardElements.length - 1)));
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [projects.length]);

  return (
    <section id="projects" className="projects-container">
      <h1>{t("projects.title")}</h1>
      <div className="card-container" ref={containerRef}>
        {projects.map((project) => (
          <div
            className="card"
            key={project.id}
            onClick={() => setSelectedProject(project)}
          >
            <h2>{t(`projects.items.${project.slug}.name`)}</h2>
            <p>{t(`projects.items.${project.slug}.description`)}</p>
            <ul className="technologies">
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
