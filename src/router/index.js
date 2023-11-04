import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // scrollBehavior(to, from, savedPosition) = {
    //   return : {top : 0}
    // },
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
    }
  ]
})

export default router
