<script setup>
import AppLogo from '@/components/core/AppLogo.vue'
import { BackgroundModes } from '@/lib/background-modes'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const backgroundModeCssClass = computed(() => {
  switch (store.state.ui.backgroundMode) {
    case BackgroundModes.Full:
      return 'background-full'

    case BackgroundModes.Half:
      return 'background-half'

    case BackgroundModes.Swing:
      return 'background-swing'

    default:
      return 'background-none'
  }
})
</script>
<template>
  <div class="app-wrapper app-background" :class="backgroundModeCssClass">
    <app-logo />
    <slot></slot>
  </div>
</template>
