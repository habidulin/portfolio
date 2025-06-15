import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ru from "./locales/ru/translation.json";
import en from "./locales/en/translation.json";
import de from "./locales/de/translation.json";
import ua from "./locales/ua/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    ua: { translation: ua },
    ru: { translation: ru },
    de: { translation: de },
    en: { translation: en }
  },
  lng: "de", // язык по умолчанию
  fallbackLng: "de",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;