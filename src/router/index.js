import { createRouter, createWebHistory } from 'vue-router';
import { trackRouter } from 'vue-gtag-next';
import HomePage from '../views/HomePage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/components',
    name: 'component-library',
    component: () =>
      import(
        /* webpackChunkName: "component-library" */ '../views/ComponentLibrary.vue'
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

trackRouter(router, { useScreenview: true });

export default router;
