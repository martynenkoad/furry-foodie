<script lang="ts" setup>
import { onMounted } from 'vue'
import ApplicationUiWrapper from '@/components/core/ApplicationUiWrapper.vue'
import AppLoading from '@/components/core/AppLoading.vue'
import { useAppInit } from '@/lib/core/app-init'
import { useViewsTransitions } from '@/lib/core/use-views-transitions'

const { isAppReady, appInit } = useAppInit()
const { onLeave, onEnter } = useViewsTransitions()

onMounted(() => {
  appInit()
})
</script>
<template>

  <application-ui-wrapper>
    <app-loading v-if="!isAppReady" />
    <router-view v-else v-slot="{ Component }">
      <transition
        :css="false"
        @leave="onLeave"
        @enter="onEnter"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </application-ui-wrapper>
</template>
