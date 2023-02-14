<script lang="ts" setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['click'])
const buttonClicked = (): void => {
  emit('click')
}
</script>
<template>
  <div class="primary-button">
    <button @click.prevent="buttonClicked">
      <slot />
    </button>
  </div>
</template>
