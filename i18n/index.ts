import type { I18nOptions } from 'vue-i18n'
import { createI18n } from 'vue-i18n'
import { settings } from '@/lib/settings'
import en from './en.json'
import ua from './ua.json'

const useI18n = (): I18nOptions => {
  return {
    locale: settings.locale.defaultLocale,
    globalInjection: true,
    legacy: false,
    messages: {
      en: en.messages,
      ua: ua.messages
    }
  }
}

const i18n = createI18n<false>(useI18n())

export { i18n }
