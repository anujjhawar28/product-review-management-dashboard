import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', name: 'Dashboard', component: () => import('../views/ReviewDashboard.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;