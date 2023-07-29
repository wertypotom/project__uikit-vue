import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Index from '@/views/index.vue';
import Typography from '@/views/Typoghraphy.vue';
import Button from '@/views/Button.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Index,
  },
  {
    path: '/typography',
    component: Typography,
  },
  {
    path: '/button',
    component: Button,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
