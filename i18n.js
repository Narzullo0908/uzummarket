import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./public/localization/en/global.json";
import uz from "./public/localization/uz/global.json";
import ru from "./public/localization/ru/global.json";

const resources = {
  en: {
    translation: en,
  },
  uz: {
    translation: uz,
  },
  ru: {
    translation: ru,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
