import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface Pais {
  name: string
  nativeName: string
  flag: string
  capital: string
  region: string
  population: number
}

export const usePaisesStore = defineStore('paises', () => {
  const paises = ref<Pais[]>([])
  const paisesFiltrados = ref<Pais[]>([])

  const getPaises = async () => {
    try {
      const res = await fetch('api.json')
      const data = await res.json()
      paises.value = data
    } catch (error) {
      console.error('Error al obtener países:', error)
    }
  }

  const filtrarRegion = (region: string) => {
    if (region === '') {
      paisesFiltrados.value = paises.value
    } else {
      paisesFiltrados.value = paises.value.filter(pais =>
        pais.region.includes(region)
      )
    }
  }

  const filtroNombre = (texto: string) => {
    const textoCliente = texto.toLowerCase()
    paisesFiltrados.value = paises.value.filter(pais => {
      const textoApi = pais.name.toLowerCase()
      return textoApi.includes(textoCliente)
    })
  }

  const topPaisesPoblacion = computed(() => {
    return [...paisesFiltrados.value].sort((a, b) =>
      a.population < b.population ? 1 : -1
    )
  })

  return {
    paises,
    paisesFiltrados,
    getPaises,
    filtrarRegion,
    filtroNombre,
    topPaisesPoblacion
  }
})
