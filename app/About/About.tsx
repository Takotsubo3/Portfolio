"use client";
import { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from "@/app/context/LanguageContext";
import Modal from "./Modal";

export default function About() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownloadCV = () => {
    window.open('/cv-celena-lentete.pdf', '_blank');
  };

  return (
    <section id="about" className="about-container">
      <h1 className="about-title">{t('about.title')}</h1>
      
      <div className="card-container">
        <div className="left-span">
          <Image 
            src="/me.jpeg" 
            alt="Profile"
            width={250}
            height={250}
            className="profile"
          />
        </div>
        
        <div className="vertical-line"></div>

        <div className="right-span">
          <h2 className="card-title">{t('about.greeting')}</h2>
          <p className="card-description" style={{ whiteSpace: 'pre-line' }}>
            {t('about.description')}
          </p>
        </div>
      </div>

      <div className="pop-up-btns">
        <button className="pop-up-btn" onClick={handleDownloadCV}>
          {t('about.buttons.cv')}
        </button>
        
        <button className="pop-up-btn" onClick={() => setIsModalOpen(true)}>
          {t('about.buttons.skills')}
        </button>
      </div>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)} />
      )}
    </section>
  );
}