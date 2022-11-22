import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import mitt from 'mitt'

const app = createApp(App)
const emitter = mitt()
app.config.globalProperties.emitter = emitter
app.use(store)
app.use(router)
app.use(mitt)
app.mount('#app')
