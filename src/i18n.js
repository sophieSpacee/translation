import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationDE from "./locales/de.json";
import translationEN from "./locales/en.json";
import translationFR from "./locales/fr.json";
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    resources: {
      en: { translation: translationEN },
      de: { translation: translationDE },
      fr: { translation: translationFR },
    },
  });
export default i18n;
