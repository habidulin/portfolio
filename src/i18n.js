import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ru from "./locales/ru/translation.json";
import en from "./locales/en/translation.json";
import de from "./locales/de/translation.json";
import ua from "./locales/ua/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: ru },
    en: { translation: en },
    de: { translation: de },
    ua: { translation: ua }
  },
  lng: "ru", // язык по умолчанию
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;