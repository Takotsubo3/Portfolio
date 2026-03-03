'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import translations from '@/Data/translations.json';
import projectsEn from '@/Data/projects-en.json';
import projectsFr from '@/Data/projects-fr.json';
import projectsKm from '@/Data/projects-km.json';

type Language = 'en' | 'fr' | 'km';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('en');

  const t = (path: string): string => {
    const keys = path.split('.');
    
    const allTranslations: any = {
      en: { ...translations.en, projects: projectsEn },
      fr: { ...translations.fr, projects: projectsFr },
      km: { ...translations.km, projects: projectsKm }
    };

    let result: any = allTranslations[lang];
    
    keys.forEach(key => {
      result = result ? result[key] : null;
    });

    return result || path; 
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useTranslation must be used within LanguageProvider");
  return context;
};