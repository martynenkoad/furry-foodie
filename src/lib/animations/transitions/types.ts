import * as gsap from 'gsap'

export interface IViewTransitionHandler {
  (el: HTMLElement, done: () => void): void
}

export interface IViewTransition {
  onEnter: IViewTransitionHandler
  onLeave: IViewTransitionHandler
}

export class ViewTransition implements IViewTransition {
  /**
   * Default leave transition handler.
   * @param el
   * @param done
   */
  onLeave (el: HTMLElement, done: () => void) {
    const tl = new gsap.TimelineMax()
    tl.fromTo(el, {
      opacity: 1,
      duration: 0.2,
      scale: 1
    }, {
      opacity: 0,
      scale: 0.9
    })
    done()
  }

  /**
   * Default enter transition handler.
   * @param el
   * @param done
   */
  onEnter (el: HTMLElement, done: () => void) {
    const tl = new gsap.TimelineMax()
    tl.fromTo(el, {
      opacity: 0,
      duration: 0.2,
      scale: 0.9
    }, {
      opacity: 1,
      scale: 1
    })
    done()
  }
}
