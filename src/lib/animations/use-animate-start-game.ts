import * as gsap from 'gsap'

export interface IUseAnimateStartGame {
  animateIn(): void,
  animateOut(): void
}

export const useAnimateStartGame = (): IUseAnimateStartGame => {
  const getElements = () => {
    const startGameRow = document.querySelector('#startGameRow')
    const wallOfGloryRow = document.querySelector('#wallOfGloryRow')
    const languageRow = document.querySelector('#languageRow')

    return {
      startGameRow,
      wallOfGloryRow,
      languageRow
    }
  }

  const animateIn = (): void => {
    const { languageRow, wallOfGloryRow, startGameRow } = getElements()
    const tl = new gsap.TimelineMax()
    tl.fromTo(languageRow, {
      opacity: 1
    }, {
      opacity: 0,
      display: 'none'
    })

    tl.fromTo(wallOfGloryRow, {
      opacity: 1,
      y: 0
    }, {
      opacity: 0,
      display: 'none',
      y: 200
    }, 0.05)

    tl.fromTo(startGameRow, {
      y: 0
    }, {
      y: 200
    }, 0.1)
  }
  const animateOut = (): void => {
    const { languageRow, wallOfGloryRow, startGameRow } = getElements()
    const tl = new gsap.TimelineMax()
    tl.fromTo(languageRow, {
      opacity: 0,
      display: 'none'
    }, {
      opacity: 1,
      display: 'block'
    })
    tl.fromTo(wallOfGloryRow, {
      opacity: 0,
      y: 200,
      display: 'none'
    }, {
      opacity: 1,
      y: 0,
      display: 'block'
    }, 0.05)
    tl.fromTo(startGameRow, {
      y: 200
    }, {
      y: 0
    }, 0.01)
  }

  return {
    animateIn,
    animateOut
  }
}
