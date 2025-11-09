import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ru from '@app/locales/ru/index.json';
import en from '@app/locales/en/index.json';
import uz from '@app/locales/uz/index.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ru,
      en,
      uz,
    },
    supportedLngs: ['ru', 'en', 'uz'],
    fallbackLng: 'uz',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
