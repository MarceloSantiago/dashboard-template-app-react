import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { useLanguageStore, getLanguageByCode } from '../../store/language.store';
import { languages } from '../../i18n';
import { translatePath } from '../../i18n/page-slugs';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguageStore();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const currentLang = getLanguageByCode(language);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getLocaleFromPath = (pathname: string): string | null => {
    const segments = pathname.split('/').filter(Boolean);
    const firstSegment = segments[0];
    const validLocales = languages.map((l) => l.code) as string[];
    if (firstSegment && validLocales.includes(firstSegment)) {
      return firstSegment;
    }
    return null;
  };

  const handleSelect = (code: string) => {
    setLanguage(code as typeof language);
    setIsOpen(false);

    const currentLocale = getLocaleFromPath(location.pathname);
    let newPath: string;

    if (currentLocale) {
      newPath = translatePath(location.pathname, currentLocale, code);
    } else {
      newPath = `/${code}${location.pathname === '/' ? '' : location.pathname}`;
    }

    navigate(newPath);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
      >
        <span className="text-base dark:text-white">{currentLang.flag}</span>
        <span className="hidden sm:inline dark:text-white">{currentLang.name}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={`w-full flex items-center gap-2 px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-700 ${
                language === lang.code ? 'bg-gray-50 dark:bg-gray-700' : ''
              }`}
            >
              <span className="text-base dark:text-white">{lang.flag}</span>
              <span className="dark:text-white">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
