<script setup lang="ts">
import { onMounted } from 'vue'
import Card from './Card.vue'
import { usePaisesStore } from '@/stores/paises'

const store = usePaisesStore()

onMounted(async () => {
  await store.getPaises()
  store.filtrarRegion('Americas')
})
</script>

<template>
  <div class="row">
    <div v-for="pais in store.topPaisesPoblacion" :key="pais.name" class="col-12">
      <Card :pais="pais" />
    </div>
  </div>
</template>

<style scoped></style>
