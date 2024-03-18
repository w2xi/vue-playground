<script setup lang="ts">
import pkg from '@/package.json'

const extractVersion = (dep: string) => {
  const version = pkg.dependencies[dep as keyof typeof pkg.dependencies]
  return version ? version.replace(/[\^~]/g, '') : ''
}
const replVersion = extractVersion('@vue/repl')
const fightingDesignVersion = extractVersion('fighting-design')


</script>

<template>
  <nav flex justify-between box-border pl pr>
    <h1 flex items-center>
      <!-- <img h-6 mr-2 alt="logo" src="/logo.svg" /> -->
      <f-avatar
        round
        size="mini"
        src="https://raw.githubusercontent.com/Tyh2001/images/4ad62a8f00aa2473deca61598f307430d8d4a4cf/fighting-design/FightingDesign.svg"
      />
      <span ml text-xl>Fighting-Design Playground</span>
      <f-tag ml p-6px simple type="primary" size="mini">{{ `v${fightingDesignVersion}` }}</f-tag>
      <f-tag ml p-6px simple type="primary" size="mini">{{ `repl v${replVersion}`}}</f-tag>
    </h1>
    <div class="links">
      
    </div>
  </nav>
</template>

<style>
nav {
  --bg: #fff;
  --bg-light: #fff;
  --border: #ddd;

  --at-apply: 'box-border flex justify-between px-4 z-999 relative';

  position: relative;
  height: var(--nav-height);
  background-color: var(--bg);
  box-shadow: 0 0 6px #409eff;
  z-index: 999;

  .el-select {
    width: 140px;
  }
}

.dark nav {
  --bg: #1a1a1a;
  --bg-light: #242424;
  --border: #383838;

  --at-apply: 'shadow-none';
  border-bottom: 1px solid var(--border);
}
</style>../../package.json
