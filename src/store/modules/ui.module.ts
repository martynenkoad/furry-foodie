import type { ActionTree, GetterTree, MutationTree } from 'vuex/types'
import { LogoModes } from '@/lib/logo-modes'
import { BackgroundModes } from '@/lib/background-modes'

export interface IUiState {
  isAppReady: boolean,
  isLogoAnimated: boolean,
  logoMode: LogoModes,
  backgroundMode: BackgroundModes
}

const state: IUiState = {
  isAppReady: false,
  isLogoAnimated: false,
  logoMode: LogoModes.ScreenMiddle,
  backgroundMode: BackgroundModes.Full
}

const getters: GetterTree<IUiState, never> = {}

const mutations: MutationTree<IUiState> = {
  /**
   * Set application ready state.
   * @param state
   * @param isReady
   */
  setAppReady (state: IUiState, isReady: boolean): void {
    state.isAppReady = isReady
  },

  /**
   * Apply logo mode.
   * @param state
   * @param mode
   */
  setLogoMode (state: IUiState, mode: LogoModes): void {
    state.logoMode = mode
  },

  /**
   * Set background mode.
   * @param state
   * @param mode
   */
  setBackgroundMode (state: IUiState, mode: BackgroundModes): void {
    state.backgroundMode = mode
  },

  /**
   * Set whether the logo should animate or not.
   * @param state
   * @param isAnimated
   */
  setLogoAnimated (state: IUiState, isAnimated: boolean): void {
    state.isLogoAnimated = isAnimated
  }
}

const actions: ActionTree<IUiState, never> = {
  setAppReady ({ commit }, isReady: boolean): void {
    commit('setAppReady', isReady)
  },

  setLogoMode ({ commit }, mode: LogoModes): void {
    commit('setLogoMode', mode)
  },

  setBackgroundMode ({ commit }, mode: BackgroundModes): void {
    commit('setBackgroundMode', mode)
  },

  setLogoAnimated ({ commit }, isLogoAnimated): void {
    commit('setLogoAnimated', isLogoAnimated)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
