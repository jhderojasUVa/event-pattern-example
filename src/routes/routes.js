import { createMemoryHistory, createRouter } from 'vue-router';

import Dashboard from '../pages/dashboard/Dashboard.vue';
import AddTodo from '../pages/dashboard/Dashboard.vue';

import { useToDoStore } from '../stores/todoStore';

const routes = [
  { path: '/', component: Dashboard },
  { path: '/add', component: AddTodo },

];


const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    // Initializing store on router and filling it
    const storeTodos = useToDoStore();
    storeTodos.addAllTodoFromService();
    next();
});

export { router };