import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'mdb-vue-ui-kit/css/mdb.min.css';

// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap"

// const token = localStorage.getItem('accessToken')
// if (token) {
//     store.dispatch('verifyToken')
// }
createApp(App).use(store).use(router).mount('#app')
