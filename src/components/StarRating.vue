<template>
  <div class="flex gap-1 items-center">
    <i
      v-for="n in 5"
      :key="n"
      class="pi"
      :class="n <= value ? 'pi-star-fill text-yellow-500' : 'pi-star text-gray-400'"
    />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  value: number
}>()
</script>

<style scoped>
.pi {
  font-size: 1.1rem;
}
</style>
