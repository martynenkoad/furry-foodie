<script lang="ts" setup>
import { defineComponent } from 'vue'

defineComponent({
  name: 'AppLoading'
})
</script>
<template>
  <div class="app-loading">
    {{ $t('loading.appLoadingText') }}
  </div>
</template>
