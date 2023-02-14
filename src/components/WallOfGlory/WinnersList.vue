<script setup>
import { defineProps, onMounted } from 'vue'
import { useStore } from 'vuex'
import { BackgroundModes } from '@/lib/background-modes'

defineProps({
  winners: {
    type: Array,
    required: true
  }
})

const store = useStore()

onMounted(() => {
  store.dispatch('ui/setBackgroundMode', BackgroundModes.None)
})
</script>
<template>
  <div class="winners-list">
    <ul>
      <li v-for="i in 7" :key="`winner-${i}`">
        <span class="number">{{ i }}</span>
        <span class="name" :class="{ 'na': winners.length < i }">{{ winners.length >= i ? winners[i - 1] : '&mdash;&mdash;&mdash;' }}</span>
      </li>
    </ul>
  </div>
</template>
