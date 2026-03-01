'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import Select from 'react-select';
import { useTranslation } from '@/app/context/LanguageContext';

const languages = [
  { value: 'en', label: 'English', image: '/united-kingdom.png' },
  { value: 'fr', label: ' Français', image: '/france.png' },
];

export default function Nav() {
  const { t, setLang, lang } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentOption = languages.find(l => l.value === lang);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const customStyles = {
    control: (base: any) => ({
      ...base,
      backgroundColor: 'black',
      borderRadius: '1.875rem',
      border: 'none',
      boxShadow: 'none',
      cursor: 'pointer',
      padding: '0.2rem 0.5rem',
      '&:hover': {
        backgroundColor: '#1a1a1a'
      }
    }),
    menu: (base: any) => ({
      ...base,
      backgroundColor: 'black',
      borderRadius: '1rem',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      overflow: 'hidden'
    }),
    option: (base: any, state: any) => ({
      ...base,
      backgroundColor: state.isFocused ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
      color: 'white',
      cursor: 'pointer',
      '&:active': {
        backgroundColor: 'rgba(255, 255, 255, 0.2)'
      }
    }),
    singleValue: (base: any) => ({
      ...base,
      color: 'white'
    }),
    indicatorSeparator: () => ({
      display: 'none'
    }),
    dropdownIndicator: (base: any) => ({
      ...base,
      color: 'white',
      '&:hover': {
        color: 'white'
      }
    })
  };

  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <Select
          className="lang-select"
          classNamePrefix="react-select"
          value={currentOption}
          options={languages}
          styles={customStyles}
          onChange={(option: any) => setLang(option.value)}
          formatOptionLabel={(option) => (
            <div className="lang-option" style={{ display: 'flex', alignItems: 'center' }}>
              <Image 
                src={option.image} 
                alt={option.label} 
                width={20} 
                height={20} 
                style={{ marginRight: 8 }} 
              />
              <span>{option.label}</span>
            </div>
          )}
        />

        <button className={`burger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <ul className={`menu ${isOpen ? 'open' : ''}`}>
          <li><Link href="/#" onClick={closeMenu}>{t('nav.home')}</Link></li>
          <li><Link href="/#about" onClick={closeMenu}>{t('nav.about')}</Link></li>
          <li><Link href="/#projects" onClick={closeMenu}>{t('nav.projects')}</Link></li>
          <li><Link href="/#contact" onClick={closeMenu}>{t('nav.contact')}</Link></li>
        </ul>
      </div>
    </nav>
  );
}