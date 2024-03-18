<script setup lang="ts">
import { Repl } from '@vue/repl'
import Monaco from '@vue/repl/monaco-editor'
import Header from './components/Header.vue'
</script>

<template>
  <Header />
  <Repl :editor="Monaco" />
</template>

<style>
body {
  --at-apply: m-none text-13px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  --base: #444;
  --nav-height: 50px;
}

.vue-repl {
  height: calc(100vh - var(--nav-height)) !important;
}

.dark .vue-repl,
.vue-repl {
  --color-branding: #409eff !important;
}

.dark body {
  background-color: #1a1a1a;
}
</style>./components/Header.vue