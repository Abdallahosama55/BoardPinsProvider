import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi) // Using backend to load translation files
  .use(LanguageDetector) // Automatically detect user language
  .use(initReactI18next) // Initialize React i18next
  .init({
    fallbackLng: 'en', // Default language if translation is missing
    debug: process.env.NODE_ENV === 'development', // Debug mode in development only
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Path to translation files
    },
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
