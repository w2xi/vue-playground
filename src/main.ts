import { createApp } from 'vue'
import App from './App.vue'
import FightingDesign from 'fighting-design'
import 'fighting-design/dist/index.css'
import 'virtual:uno.css'
import '@unocss/reset/tailwind.css'

createApp(App).use(FightingDesign).mount('#app')
