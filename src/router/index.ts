import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import IntroView from '@/views/IntroView.vue'
import SelectLanguage from '@/views/SelectLanguage.vue'
import WallOfGlory from '@/views/WallOfGlory.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'IntroView',
    component: IntroView
  },
  {
    path: '/select-language',
    name: 'SelectLanguage',
    component: SelectLanguage
  },
  {
    path: '/wall-of-glory',
    name: 'WallOfGlory',
    component: WallOfGlory
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
