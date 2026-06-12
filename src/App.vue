<script setup lang="ts">
import CardList from './components/CardList.vue'
import Continentes from './components/Continentes.vue'
import Buscador from './components/Buscador.vue'
</script>

<template>
  <div class="container">
    <h1 class="text-center">Países API</h1>
    <Continentes />
    <Buscador />
    <CardList />
  </div>
</template>

<style scoped></style>
