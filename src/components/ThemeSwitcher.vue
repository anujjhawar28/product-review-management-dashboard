<template>
  <div class="flex items-center gap-2">
    <span class="font-medium">Theme</span>
    <Select
      v-model="selectedTheme"
      :options="themeOptions"
      optionLabel="label"
      placeholder="Select Theme"
      class="w-40"
      @change="changeTheme"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const selectedTheme = ref({ label: 'Light', value: 'lara-light-blue' })

const themeOptions = [
  { label: 'Light', value: 'lara-light-blue' },
  { label: 'Dark', value: 'lara-dark-blue' },
]

const changeTheme = () => {
  const themeLink = document.getElementById('theme-css') as HTMLLinkElement
  if (themeLink) {
    themeLink.href = `https://unpkg.com/primevue/resources/themes/${selectedTheme.value.value}/theme.css`
  } else {
    // Inject the theme stylesheet if not present
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.id = 'theme-css'
    link.href = `https://unpkg.com/primevue/resources/themes/${selectedTheme.value.value}/theme.css`
    document.head.appendChild(link)
  }
}
</script>
