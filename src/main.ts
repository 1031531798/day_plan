import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import CardBox from '@/components/cardBox/index.vue'
import './styles/common.scss'
const app = createApp(App)
app.component(
  'CardBox', CardBox
)
app.use(store).use(router).mount('#app')
