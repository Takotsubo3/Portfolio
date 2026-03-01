"use client";
import { useTranslation } from "@/app/context/LanguageContext";

interface ModalProps {
  onClose: () => void;
}

export default function Modal({ onClose }: ModalProps) {
  const { t } = useTranslation();
  const hardSkills = ["React", "Next.js", "TypeScript", "SCSS", "Node.js", "Git", "Figma"];

  const softSkills = t('about.softSkills.list', { returnObjects: true }) as string[];

  return (
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
    </div>
  );
}