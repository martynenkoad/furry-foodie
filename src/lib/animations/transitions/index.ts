import { IViewTransition } from '@/lib/animations/transitions/types'
import { IntroViewTransition } from '@/lib/animations/transitions/views/intro-view'
import { SelectLanguageTransition } from '@/lib/animations/transitions/views/select-language'

const Transitions: Map<string, IViewTransition> = new Map<string, IViewTransition>([
  ['IntroView', new IntroViewTransition()],
  ['SelectLanguage', new SelectLanguageTransition()]
])

export { Transitions }
