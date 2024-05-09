<script setup lang="ts">
import Header from '@/components/header/Header.vue';
import Footer from './components/footer/Footer.vue';
import { RouterView } from 'vue-router';
</script>

<template>
<!DOCTYPE html>
    <Header />
      <main class="h-full">
        <router-view ></router-view>
      </main>
    <Footer />
</template>

<style lang="scss">
* {
  padding: 0 !important;
  margin: 0 !important;
  box-sizing: border-box !important;
}
</style>
