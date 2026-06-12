<script setup lang="ts">
import { ref } from 'vue'
import { usePaisesStore } from '@/stores/paises'

const texto = ref('')
const store = usePaisesStore()

const procesarInput = () => {
  store.filtroNombre(texto.value)
}
</script>

<template>
  <input
    v-model="texto"
    type="text"
    placeholder="Ingrese País"
    class="form-control my-3"
    @keyup="procesarInput"
  />
</template>

<style scoped></style>
