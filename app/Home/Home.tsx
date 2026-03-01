'use client';
import { useEffect } from 'react';
import MetaBalls from '../../components/Metaballs/Metaballs';
import { useTranslation } from '@/app/context/LanguageContext';
import { FaArrowDown } from 'react-icons/fa';

export default function Home() {
    const { t, setLang, lang } = useTranslation();
  
  useEffect(() => {
    const setAppHeight = () => {
      document.documentElement.style.setProperty(
        '--app-height',
        `${window.innerHeight}px`
      );
    };
    window.addEventListener('resize', setAppHeight);
    setAppHeight();
    return () => window.removeEventListener('resize', setAppHeight);
  }, []);

  return (
    <section className="home-container">
      <MetaBalls
        color="#000000"
        cursorBallColor="#000000"
        cursorBallSize={2}
        ballCount={30}
        animationSize={37}
        enableMouseInteraction
        enableTransparency={true}
        hoverSmoothness={0.121}
        clumpFactor={1.7}
        speed={0.2}
      />
      <div className="home-page">
        <h1 className="main-title">{t('home.name')}</h1>
        <h2 className="sub-title">{t('home.role')}</h2>
        <button className="home-btn">
          <FaArrowDown />
        </button>
      </div>
    </section>
  );
}