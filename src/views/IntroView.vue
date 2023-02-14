<script lang="ts" setup>
import { onBeforeUnmount, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { BackgroundModes } from '@/lib/background-modes'
import CurrentLanguage from '@/components/locales/CurrentLanguage.vue'
import PrimaryButton from '@/components/core/PrimaryButton.vue'
import PrimaryInput from '@/components/core/PrimaryInput.vue'
import { useAnimateStartGame } from '@/lib/animations/use-animate-start-game'
import { Swipes, useSwipes } from '@/lib/core/use-swipes'

const router = useRouter()
const store = useStore()

const { animateIn, animateOut } = useAnimateStartGame()
const swipeHandler = (swipe: Swipes) => {
  if (swipe === Swipes.Left) {
    animateOut()
  }
}
const { subscribe, unsubscribe } = useSwipes(swipeHandler)

const selectLanguage = (): void => {
  router.push('/select-language')
}

const wallOfGlory = (): void => {
  router.push('/wall-of-glory')
}

const startGame = (): void => {
  animateIn()
}

onMounted(() => {
  store.dispatch('ui/setBackgroundMode', BackgroundModes.Swing)
  subscribe()
})

onBeforeUnmount(() => {
  unsubscribe()
})
</script>
<template>
  <div class="intro-view view">
    <div class="text-center">
      <div id="startGameRow" class="row">
        <primary-input />
        <primary-button @click="startGame">{{ $t('intro.startGame') }}</primary-button>
      </div>
      <div id="wallOfGloryRow" class="row">
        <primary-button @click="wallOfGlory">{{ $t('intro.wallOfGlory') }}</primary-button>
      </div>
      <div id="languageRow" class="row language">
        <current-language @select-language="selectLanguage" />
      </div>
    </div>
  </div>
</template>
