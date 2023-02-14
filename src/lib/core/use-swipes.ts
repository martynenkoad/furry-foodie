export enum Swipes {
  Left,
  Right,
  Up,
  Down
}

const useSwipes = (handler: (direction: Swipes) => void) => {
  let x: any = null
  let y: any = null

  /**
   * Handle start of touch event.
   * @param ev
   */
  const handleTouchStart = (ev: TouchEvent): void => {
    const firstTouch = ev.touches[0]
    x = firstTouch.clientX
    y = firstTouch.clientY
  }

  /**
   * Handle touch movement.
   * @param ev
   */
  const handleTouchMove = (ev: TouchEvent) => {
    if (!x || !y) {
      return
    }

    const deltaX = x - ev.touches[0].clientX
    const deltaY = y - ev.touches[0].clientY

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > 0) {
        handler(Swipes.Right)
      } else {
        handler(Swipes.Left)
      }
    } else {
      if (deltaY > 0) {
        handler(Swipes.Down)
      } else {
        handler(Swipes.Up)
      }
    }

    x = null
    y = null
  }

  const subscribe = (): void => {
    document.addEventListener('touchstart', handleTouchStart, false)
    document.addEventListener('touchmove', handleTouchMove, false)
  }

  const unsubscribe = (): void => {
    document.removeEventListener('touchstart', handleTouchStart, false)
    document.removeEventListener('touchmove', handleTouchMove, false)
  }

  return {
    subscribe,
    unsubscribe
  }
}

export { useSwipes }
