import { createApp } from 'vue'
import router from '@/router/router'
import App from '@/App.vue'

import components from '@/components/UI'

import './main.scss'

const app = createApp(App)

components.forEach((component) => {
  app.component(component.name, component)
})

app.use(router)

app.mount('#app')
