import enLang from './entries/en-us';
import itLang from './entries/it-it';
import vnLang from './entries/vi-vn';
import faLang from './entries/fa-ir';
import heLang from './entries/he-il';

export const AppLanguages = [
  {
    languageId: 'vietnamese',
    locale: 'vi',
    name: 'Vietnamese',
    icon: 'vn',
  },
  {
    languageId: 'english',
    locale: 'en',
    name: 'English',
    icon: 'us',
  },
  {
    languageId: 'italian',
    locale: 'it',
    name: 'Italiano',
    icon: 'it',
  },
  {
    languageId: 'persian',
    locale: 'ir',
    name: 'farsi',
    icon: 'ir',
  },
  {
    languageId: 'hebrew',
    locale: 'he',
    name: 'Hebrew',
    icon: 'il',
  }
];

const AppLocale = {
  en: enLang,
  vi: vnLang,
  it: itLang,
  fa: faLang,
  he: heLang,
};

export default AppLocale;
