import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import en from './locales/en.json';
import af from './locales/af.json';
import zu from './locales/zu.json';
import xh from './locales/xh.json';
import ny from './locales/ny.json';

/**
 * i18n Configuration
 * Supports: English, Afrikaans, isiZulu, isiXhosa, Chichewa
 */

i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    resources: {
      en: { translation: en },
      af: { translation: af },
      zu: { translation: zu },
      xh: { translation: xh },
      ny: { translation: ny },
    },
    fallbackLng: 'en', // Default language
    debug: false,

    interpolation: {
      escapeValue: false, // React already escapes values
    },

    detection: {
      // Order of language detection
      order: ['localStorage', 'navigator', 'htmlTag'],
      // Cache user language preference
      caches: ['localStorage'],
    },
  });

export default i18n;
