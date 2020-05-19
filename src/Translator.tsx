import * as React from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getCurrentLocale } from './features/appSlice';

import en from './locales/en.json';
import fr from './locales/fr.json';

interface ITranslatorProps {
}

const Translator: React.FunctionComponent<ITranslatorProps> = ({ children }) => {
  const locale = useSelector(getCurrentLocale);
  i18n
  .use(initReactI18next)
  .init({
    resources: {
      en,
      fr
    },
    lng: locale,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });
  return (
    <>
      {children}
    </>
  );
};

export default Translator;
