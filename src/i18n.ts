import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importing translation files

import translationEN from "./locales/en/translation.json";
import translationSP from "./locales/sp/translation.json";


//Creating object with the variables of imported translation files
const resources = {
  en: {
    translation: translationEN,
  },
  sp: {
    translation: translationSP,
  },
};

//i18N Initialization
declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", //default language
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    returnNull: false,
  });

export default i18n;