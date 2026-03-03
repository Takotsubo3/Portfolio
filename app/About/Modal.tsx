"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "@/app/context/LanguageContext";

interface ModalProps {
  onClose: () => void;
}

export default function Modal({ onClose }: ModalProps) {
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const hardSkills = [
    "C#", "CSS", "HTML5", "Java", "JavaScript", "PHP", "Python", "TypeScript",
    "Vercel", ".NET", "Node.js", "Nuxt.js", "React", "Spring", "Vue.js", "Symfony",
    "Nginx", "MariaDB", "Canva", "Figma", "GitHub", "GitLab", "Git"
  ];

  const softSkills = (t as unknown as (key: string, options: { returnObjects: boolean }) => string[])(
    'about.softSkills.list', 
    { returnObjects: true }
  );

  if (!mounted) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        
        <div className="modal-section">
          <h2 className="modal-title">Hard Skills</h2>
          <ul className="skills-list">
            {hardSkills.map((skill, index) => (
              <li key={index} className="skill-item">{skill}</li>
            ))}
          </ul>
        </div>

        <div className="modal-divider"></div>

        <div className="modal-section">
          <h2 className="modal-title">{t("about.softSkills.title")}</h2>
          <ul className="skills-list">
            {Array.isArray(softSkills) && softSkills.map((skill, index) => (
              <li key={index} className="skill-item">{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>,
    document.body
  );
}