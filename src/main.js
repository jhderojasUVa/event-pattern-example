import { createApp } from 'vue'
import './style.css'
// Change to start on dashboard
import App from './App.vue';
// import Dashboard from './pages/dashboard/Dashboard.vue';

// storage
import { createPinia } from 'pinia';

// router
import { router } from './routes/routes';

// Pinia storage initalization
const pinia = createPinia();

// start of the app
// const app = createApp(Dashboard);
const app = createApp(App);
// add pinia
app.use(pinia);
// add router
app.use(router);

// mount app
app.mount('#app');