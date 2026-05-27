import i18n from "i18next";

import {
  initReactI18next,
} from "react-i18next";

i18n.use(
  initReactI18next
).init({
  resources: {
    kz: {
      translation: {
        dashboard:
          "Басқару панелі",

        assistant:
          "AI Көмекші",

        attendance:
          "Қатысу",

        practice:
          "Практика",

        marketplace:
          "Маркетплейс",
      },
    },

    ru: {
      translation: {
        dashboard:
          "Панель",

        assistant:
          "AI Ассистент",

        attendance:
          "Посещаемость",

        practice:
          "Практика",

        marketplace:
          "Маркетплейс",
      },
    },

    en: {
      translation: {
        dashboard:
          "Dashboard",

        assistant:
          "AI Assistant",

        attendance:
          "Attendance",

        practice:
          "Practice",

        marketplace:
          "Marketplace",
      },
    },
  },

  lng: "kz",

  fallbackLng: "kz",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;