import { createApp } from 'vue'
import router from '@/router/router'
import App from '@/App.vue'

// array with all UI components
import components from '@/components/UI'

// directives
import directives from '@/directives'

import './main.scss'

const app = createApp(App)

// go through all UI components and add each of them
// (it is necessarly to have field 'name' in each UI component)
components.forEach((component) => {
  app.component(component.name, component)
})

// example: <input v-focus ... /> if directive has name 'focus'
// (it is necessarly to have field 'name' in each UI component)
directives.forEach((directive) => {
  app.directive(directive.name, directive)
})

app.use(router)

app.mount('#app')
