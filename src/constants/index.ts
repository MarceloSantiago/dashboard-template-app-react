export const APP_NAME = import.meta.env.VITE_APP_NAME || 'My Dashboard';

export const APP_VERSION = import.meta.env.VITE_APP_VERSION || '1.0.0';

export const API_TIMEOUT = 10000;

export const STORAGE_KEYS = {
  AUTH: 'auth-storage',
  THEME: 'theme-storage',
  UI: 'ui-storage',
} as const;

export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/',
  PROFILE: '/profile',
  CALENDAR: '/calendar',
  BLANK: '/blank',
  FORM_ELEMENTS: '/form-elements',
  BASIC_TABLES: '/basic-tables',
  SIGN_IN: '/signin',
  SIGN_UP: '/signup',
} as const;
