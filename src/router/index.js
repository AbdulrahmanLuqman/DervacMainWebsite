import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import AboutPage from '../views/AboutPage.vue'
import ContactPage from '../views/ContactPage.vue'
import NotFound from '../components/NotFound.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage
    },
    {
      path: '/contact',
      name: 'ContactPage',
      component: ContactPage
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
