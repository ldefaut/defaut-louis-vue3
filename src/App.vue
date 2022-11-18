<script setup>
import { RouterLink, RouterView } from "vue-router";
import MainHeader from "./components/Layouts/MainHeader.vue";
import MainFooter from "./components/Layouts/MainFooter.vue";
</script>

<template>
  <main-header />
  <RouterView />
  <MainFooter />
</template>

<style scoped></style>
