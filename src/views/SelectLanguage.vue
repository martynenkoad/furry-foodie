<script lang="ts" setup>
import { ref, Ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { ILocale } from '@/lib/locale'
import { settings } from '@/lib/settings'

const router = useRouter()
const store = useStore()

const locales: Ref<ILocale[]> = ref(settings.locale.locales)

const setLocale = (locale: ILocale): void => {
  store.dispatch('app/setLocale', locale)
  router.push('/')
}
</script>
<template>
  <div class="view select-language">
    <div>
      <div
        v-for="locale in locales"
        :key="`locale-${locale.id}`"
        class="locale"
      >
        <button :class="locale.id" @click="setLocale(locale)">{{ $t(locale.name) }}</button>
      </div>
    </div>
  </div>
</template>
