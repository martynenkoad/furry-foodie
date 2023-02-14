<script lang="ts" setup>
import { computed, defineEmits } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const emit = defineEmits(['select-language'])
const currentLocale = computed(() => {
  return store.state.app.locale
})

const selectLanguage = () => {
  emit('select-language')
}
</script>
<template>
  <div class="current-language">
    <span :class="currentLocale.id" @click.prevent="selectLanguage">{{ $t(currentLocale.name) }}</span>
  </div>
</template>
