import { IViewTransition, IViewTransitionHandler, ViewTransition } from '@/lib/animations/transitions/types'
import { Transitions } from '@/lib/animations/transitions'
import { useRoute } from 'vue-router'

interface IUseViewsTransitions {
  onLeave: IViewTransitionHandler
  onEnter: IViewTransitionHandler
}

const useViewsTransitions = (): IUseViewsTransitions => {
  const route = useRoute()
  const defaultViewTransition = new ViewTransition()

  /**
   * Get transition instance for given view ID.
   * @param viewId
   */
  const getTransitionForViewId = (viewId: string) => {
    const transition: IViewTransition | undefined = Transitions.get(viewId)
    if (!transition) {
      return defaultViewTransition
    }

    return transition
  }

  /**
   * Execute transition when user leaves view.
   * @param el
   * @param done
   */
  const onLeave = (el: HTMLElement, done: () => void) => {
    if (route.name && typeof route.name === 'string') {
      getTransitionForViewId(route.name).onLeave(el, done)
    }
  }

  /**
   * Execute transition when user enters view.
   * @param el
   * @param done
   */
  const onEnter = (el: HTMLElement, done: () => void) => {
    if (route.name && typeof route.name === 'string') {
      getTransitionForViewId(route.name).onEnter(el, done)
    }
  }

  return {
    onLeave,
    onEnter
  }
}

export { useViewsTransitions }
