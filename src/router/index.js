import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import NotFound from '../components/NotFound.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : '/',
      name : 'LandingPage',
      children: [
        {
          path: '/',
          name: 'LandingPage',
          component: LandingPage
        }
      ]
    },
    {
      path: '/:catchAll(.*)',
      component: NotFound,
    }
  ],
    scrollBehavior(to, from, savedPosition){
    return {top : 0}
  },
})

export default router
