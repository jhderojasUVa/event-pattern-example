import { createApp } from 'vue'
import './style.css'
// Change to start on dashboard
import Dashboard from './pages/dashboard/Dashboard.vue'

// storage
import { createPinia } from 'pinia'

// Pinia storage initalization
const pinia = createPinia();

// start of the app
const app = createApp(Dashboard);
// add pinia
app.use(pinia);

// mount app
app.mount('#app');