import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import ptBR from './locales/pt-BR.json';
import es from './locales/es.json';

export const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
] as const;

export type LanguageCode = typeof languages[number]['code'];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      pt: { translation: ptBR },
      es: { translation: es },
    },
    fallbackLng: 'en',
    preload: ['en', 'pt', 'es'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupFromPathIndex: 0,
    },
    react: {
      useSuspense: true,
      bindI18n: 'languageChanged',
    },
    missingKeyHandler: (lng, _ns, key, fallbackValue) => {
      console.warn(`[i18n] Missing translation: "${key}" (${lng})`);
      return fallbackValue;
    },
  });

export default i18n;
