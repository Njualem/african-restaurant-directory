import React from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n/i18n';

// Language selector component
const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-selector">
      <button 
        className={`language-btn ${i18n.language === 'en' ? 'active' : ''}`}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
      <button 
        className={`language-btn ${i18n.language === 'fr' ? 'active' : ''}`}
        onClick={() => changeLanguage('fr')}
      >
        FR
      </button>
    </div>
  );
};

export default LanguageSelector;
