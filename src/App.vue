<template>
  <div class="app">
    <RouterView />
    <Toast />
  </div>
</template>

<script setup>
import Toast from 'primevue/toast';
</script>

<style>
body, html, #app {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: Arial, sans-serif;
}
</style>