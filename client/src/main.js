import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index_V1.0'
import store from './store/index_V1.0'
import './assets/normalize_V1.0.css'
import './assets/global_V1.0.css'

createApp(App).use(store).use(router).mount('#app')