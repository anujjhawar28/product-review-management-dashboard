<template>
  <div class="flex items-center gap-2">
    <i :class="`pi ${isDark ? 'pi-moon' : 'pi-sun'}`" />
    <InputSwitch v-model="isDark" @change="toggleTheme" />
    <span>{{ isDark ? 'Dark' : 'Light' }}</span>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from '../composables/useTheme'

const { isDark, toggleTheme } = useTheme()
</script>

<style scoped>
.pi {
  font-size: 1.2rem;
}
</style>
