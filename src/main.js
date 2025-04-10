import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from '@/i18n/index'
const app = createApp(App)
  // 语言注册
  app.use(i18n)

  // 挂载到页面
  app.mount('#app', true)
  
