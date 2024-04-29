import '@/styles/index.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import directiveSwitchTheme from './directives/switchTheme'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.directive('switch-theme', directiveSwitchTheme)

app.mount('#app')
