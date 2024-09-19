import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
// Plugins
// import { registerPlugins } from './plugins';

import './style.css';
// Change to start on dashboard
import Dashboard from './pages/dashboard/Dashboard.vue';

// storage
import { createPinia } from 'pinia'

// Pinia storage initalization
const pinia = createPinia();

// Vuetify init and add components and directives
const vuetify = createVuetify({
    components,
    directives,
});

// start of the app
const app = createApp(Dashboard);

// plugins
// registerPlugins(app);

// add pinia
app.use(pinia);
app.use(vuetify);

// mount app
app.mount('#app');