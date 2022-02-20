import { createApp } from 'vue'
import App from './App.vue'
import ScrollAnimation from "./directives/scrollAnimation"

const app = createApp(App)

app.directive("scrollanimation", ScrollAnimation)

app.mount('#app')
// createApp(App).directive('scrollanimation', ScrollAnimation).mount('#app')
