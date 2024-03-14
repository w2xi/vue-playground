<script setup lang="ts">
import { Repl } from '@vue/repl'
import Monaco from '@vue/repl/monaco-editor'
import Header from './Header.vue'
</script>

<template>
  <Header />
  <Repl :editor="Monaco" />
</template>
