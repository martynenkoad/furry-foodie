<script lang="ts" setup>
import { useRouter } from 'vue-router'
import WinnersList from '@/components/WallOfGlory/WinnersList.vue'

const router = useRouter()

const sampleWinners: string[] = [
  'Crazy DogSeater',
  'Amazing Kate',
  'Cute Robby',
  'GreenGrass',
  'HoneyMoney',
  'Fast Rabbit',
  'Okey Dockey'
]

const returnBack = () => {
  router.push('/')
}
</script>
<template>
  <div class="view wall-of-glory">
    <div>
      <div class="view-title">{{ $t('wallOfGlory.title') }}</div>
      <winners-list :winners="sampleWinners" />
      <div class="return-back-button">
        <button @click.prevent="returnBack">{{ $t('wallOfGlory.returnBack') }}</button>
      </div>
    </div>
  </div>
</template>
