import type { ILocale } from '@/lib/locale'
import type { ActionTree, GetterTree, MutationTree } from 'vuex/types'
import { settings } from '@/lib/settings'
import { i18n } from '../../../i18n'

export interface IAppState {
  locale: ILocale,
  username: string
}

const state: IAppState = {
  locale: {
    id: '',
    name: '',
    browserLocales: []
  },
  username: ''
}

const getters: GetterTree<IAppState, never> = {}

const mutations: MutationTree<IAppState> = {
  /**
   * Set default locale from settings.
   * @param state
   */
  setDefaultLocale (state: IAppState): void {
    const systemLocale = navigator.language
    const locale: ILocale | undefined = settings.locale.locales.find(locale => locale.browserLocales.includes(systemLocale))

    if (locale) {
      state.locale = locale
      i18n.global.locale.value = locale.id
    } else {
      for (const l of settings.locale.locales) {
        if (l.id === settings.locale.defaultLocale) {
          state.locale = l
          i18n.global.locale.value = l.id
        }
      }
    }
  },

  /**
   * Set Locale.
   * @param state
   * @param locale
   */
  setLocale (state: IAppState, locale: ILocale): void {
    state.locale = locale
    i18n.global.locale.value = locale.id
  },

  /**
   * Set user's name.
   * @param state
   * @param username
   */
  setUsername (state: IAppState, username: string): void {
    state.username = username
  }
}

const actions: ActionTree<IAppState, never> = {
  setDefaultLocale ({ commit }): void {
    commit('setDefaultLocale')
  },

  setLocale ({ commit }, locale: ILocale): void {
    commit('setLocale', locale)
  },

  setUsername ({ commit }, username: string): void {
    commit('setUsername', username)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
