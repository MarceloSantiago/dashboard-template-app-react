import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import i18n, { LanguageCode, languages } from '../i18n';

interface LanguageState {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: (i18n.language as LanguageCode) || 'en',
      setLanguage: (lang) => {
        i18n.changeLanguage(lang);
        set({ language: lang });
      },
    }),
    {
      name: 'language-storage',
    }
  )
);

export const getLanguageByCode = (code: string) => {
  return languages.find((lang) => lang.code === code) || languages[0];
};
