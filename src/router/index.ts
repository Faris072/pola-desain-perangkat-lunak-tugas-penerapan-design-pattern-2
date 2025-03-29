import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'order',
      component: () => import('@/views/order/Index.vue'),
    },
    {
      path: '/master-product',
      name: 'msterProduct',
      component: () => import('@/views/master-product/Index.vue'),
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('@/views/checkout/Index.vue'),
    },
  ],
})

export default router
