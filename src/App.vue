<template>
  <div class="app min-h-screen">
    <div class="p-4 space-y-4">
      <div class="flex justify-between items-center">
        <h2 class="text-2xl font-bold">Product Reviews Dashboard</h2>
        <ThemeSwitcher />
      </div>
      <RouterView />
    </div>
    <Toast />
  </div>
</template>

<script setup>
import ThemeSwitcher from "./components/ThemeSwitcher.vue";
import { onMounted } from 'vue'
import { useTheme } from './composables/useTheme'

const { initTheme } = useTheme()

onMounted(() => {
  initTheme()
})
</script>

<style>
body,
html,
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: Arial, sans-serif;
}

html.my-app-dark {
  background-color: #121212;
  color: #ffffff;
}
</style>
