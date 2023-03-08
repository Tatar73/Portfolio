import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/plugins/router'
import './assets/scss/app.scss'
import { MotionPlugin } from '@vueuse/motion'


const app = createApp(App)

app.use(router)
app.use(MotionPlugin)

app.mount('#app')



  
  
  