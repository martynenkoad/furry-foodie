import { ILocale } from '@/lib/locale'

interface ISettingsDebug {
  enabled: boolean
}

interface ISettingsLocale {
  defaultLocale: string
  locales: ILocale[]
}

interface ISettings {
  debug: ISettingsDebug,
  locale: ISettingsLocale
}

export type {
  ISettingsDebug,
  ISettingsLocale,
  ISettings
}
