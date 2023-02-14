import * as gsap from 'gsap'
import { Ref } from 'vue'

export interface IUseAnimateLogo {
  animateLogo(): void
}

export const useAnimateLogo = (logoElement: Ref<HTMLInputElement|null>): IUseAnimateLogo => {
  const animateLogo = (): void => {
    if (!logoElement.value) {
      return
    }

    const furryLetters: NodeListOf<HTMLElement> = logoElement.value?.querySelectorAll('.furry .letter')
    const tl = new gsap.TimelineMax()
    tl.fromTo(furryLetters, {
      scale: 1,
      duration: 0.1
    }, {
      scale: 0.9
    })

    furryLetters.forEach((letter: HTMLElement, i) => {
      tl.fromTo(letter, {
        scale: 0.9,
        transformOrigin: 'center',
        duration: 0.2
      }, {
        scale: 1.05
      }, 0.2 * i)
      tl.to(letter, {
        duration: 0.2,
        transformOrigin: 'center',
        scale: 1
      })
    })
  }

  return {
    animateLogo
  }
}
