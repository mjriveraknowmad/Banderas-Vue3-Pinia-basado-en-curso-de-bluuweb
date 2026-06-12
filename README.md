# Bluu-Banderas-Vue3-Pinia

Está basado en el proyecto de la Sección 25: [curso versión 2020] Vuex y Composition API  (Vue CLI) del curso de https://www.udemy.com/course/curso-vue pero hecho con lo más actual.


Perfecto. La migración está completa. Aquí está el resumen de lo que hice:

- ✅ Uso de TypeScript al completo
- ✅ Composition API con `<script setup>` (más moderno)
- ✅ Pinia en lugar de Vuex (más ligero y moderno)
- ✅ Tipado de componentes y store
- ✅ Mejor organización del código

**Ambos proyectos se mantienen intactos.** El proyecto modernizado está en Bluu-Banderas-Vue3-Pinia listo para ejecutar con `npm run dev`.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
