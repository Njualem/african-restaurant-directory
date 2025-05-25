import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import enTranslation from '../locales/en/common/translation.json';
import frTranslation from '../locales/fr/common/translation.json';

// Configure i18next
i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    debug: process.env.NODE_ENV === 'development',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    resources: {
      en: {
        common: enTranslation,
      },
      fr: {
        common: frTranslation,
      },
    },
    defaultNS: 'common',
    ns: ['common'],
  });

export default i18n;
