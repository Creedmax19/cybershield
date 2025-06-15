import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import enTranslations from './locales/en/translation.json';
import deTranslations from './locales/de/translation.json';

// Check if user has previously set a language preference
const savedLanguage = localStorage.getItem('i18nextLng');
const browserLanguage = navigator.language || 'en';
const defaultLanguage = browserLanguage.startsWith('de') ? 'de' : 'en';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: savedLanguage || defaultLanguage,
    supportedLngs: ['en', 'de'],
    debug: false,
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: enTranslations,
      },
      de: {
        translation: deTranslations,
      },
    },
  });

// Save language preference when changed
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
  localStorage.setItem('i18nextLng', lng);
});

export default i18n;
