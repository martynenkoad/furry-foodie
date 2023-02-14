import type {
  ISettings, ISettingsDebug, ISettingsLocale
} from '@/lib/settings/types'

export default class DefaultSettings implements ISettings {
  debug: ISettingsDebug = {
    enabled: false
  }

  locale: ISettingsLocale = {
    defaultLocale: 'en',
    locales: [
      {
        id: 'en',
        name: 'locales.english',
        browserLocales: ['en', 'en-US', 'en-GB', 'en-EG', 'en-AU', 'en-CA', 'en-NZ', 'en-IE', 'en-ZA', 'en-JM', 'en-BZ', 'en-TT']
      },
      {
        id: 'ua',
        name: 'locales.ukrainian',
        browserLocales: ['ua', 'uk', 'uk-UA']
      }
    ]
  }
}
