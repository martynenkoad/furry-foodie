import { useStore } from 'vuex'
import { LogoModes } from '@/lib/logo-modes'
import { BackgroundModes } from '@/lib/background-modes'
import { computed, ComputedRef, watch } from 'vue'
import { PersistentStore, PersistentStoreKeys } from '@/lib/core/persistent-store'
import { ILocale } from '@/lib/locale'

export interface IUseAppInit {
  isAppReady: ComputedRef<boolean>
  appInit(): void
}

/**
 * Use application init factory.
 */
export const useAppInit = (): IUseAppInit => {
  const store = useStore()

  watch(() => store.state.app.locale, (value: ILocale) => {
    PersistentStore.store(PersistentStoreKeys.Locale, value)
  })

  watch(() => store.state.app.username, (value: string) => {
    PersistentStore.store(PersistentStoreKeys.Username, value)
  })

  const initializeStore = () => {
    store.dispatch('app/setLocale', PersistentStore.load(PersistentStoreKeys.Locale, store.state.app.locale))
    store.dispatch('app/setUsername', PersistentStore.load(PersistentStoreKeys.Username, store.state.app.username))
  }

  /**
   * Computed property which defines whether application is ready or not.
   */
  const isAppReady = computed((): boolean => store.state.ui.isAppReady)

  /**
   * Application initialization.
   */
  const appInit = (): void => {
    store.dispatch('app/setDefaultLocale')
    initializeStore()

    setTimeout(() => {
      store.dispatch('ui/setAppReady', true)
      store.dispatch('ui/setLogoMode', LogoModes.ScreenTop)
      store.dispatch('ui/setBackgroundMode', BackgroundModes.Half)
      setTimeout(() => {
        store.dispatch('ui/setBackgroundMode', BackgroundModes.Swing)
        store.dispatch('ui/setLogoAnimated', true)
      }, 400)
    }, 1000)
  }

  return {
    isAppReady,
    appInit
  }
}
