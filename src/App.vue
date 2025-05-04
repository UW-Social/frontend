<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderBar from './components/HeaderBar.vue';
import Toast from 'primevue/toast';
</script>

<template>
  <HeaderBar></HeaderBar>
  <RouterView />
  <Toast />
</template>

<style scoped></style>
