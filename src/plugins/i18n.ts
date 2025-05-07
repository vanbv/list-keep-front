import { createI18n } from 'vue-i18n'
import ruFromJson from '../locales/ru.json'
import { ru as ruFromVuetify } from 'vuetify/locale'

export default createI18n<false>({
  locale: 'ru',
  fallbackLocale: 'ru',
  messages: {
    ru: {
      ...ruFromJson,
      $vuetify: {
        ...ruFromVuetify,
      },
    },
  },
})
