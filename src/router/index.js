import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import AboutPage from '../views/AboutPage.vue'
import ContactPage from '../views/ContactPage.vue'
import NotFound from '../components/NotFound.vue';
import ICTPage from '../views/ICTPage.vue'
import CustomerSupport from '../views/CustomerSupport.vue'
import Software from '../views/SoftwarePage.vue'
import Infrastructure from '../views/InfrastructurePage.vue'
import Security from '../views/SecurityPage.vue'
import Business from '../views/BusinessPage.vue'
import Educational from '../views/EducationalPage.vue'
import TrainingServices from '../views/TrainingServices.vue'
import CoreExpertise from '../views/CoreExpertise.vue'

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
      path: '/ict',
      name: 'IctPage',
      component: ICTPage
    },
    { 
      path: '/sdi',
      name: 'Software',
      component: Software
    },
    { 
      path: '/is',
      name: 'Infrastructure',
      component: Infrastructure
    },
    { 
      path: '/ss',
      name: 'Security',
      component: Security
    },
    { 
      path: '/bs',
      name: 'Business',
      component: Business
    },
    { 
      path: '/etc',
      name: 'Educational',
      component: Educational
    },
    { 
      path: '/ts',
      name: 'TrainingServices',
      component: TrainingServices
    },
    { 
      path: '/customer-support',
      name: 'CustomerSupport',
      component: CustomerSupport
    },
    { 
      path: '/core-expertise',
      name: 'CoreExpertise',
      component: CoreExpertise
    },
    {
      path: '/:catchAll(.*)',
      component: NotFound,
    },
  ],
    scrollBehavior(to, from, savedPosition){
    return {top : 0}
  },
})

export default router
