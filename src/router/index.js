import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/frontEnd/FrontEndView.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/frontEnd/HomeView.vue'),
      },
      {
        path: 'product',
        name: 'product',
        component: () => import('@/views/frontEnd/ProductView.vue'),
      },
      {
        path: 'detail/:id',
        name: 'product-detail',
        component: () => import('@/views/frontEnd/ProductDetailView.vue'),
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('@/views/frontEnd/LoginView.vue'),
      },
    ],
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/views/backEnd/BackEndView.vue'),
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('@/views/backEnd/DashboardView.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
