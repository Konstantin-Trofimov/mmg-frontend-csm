import Homepage from './pages/Homepage.vue'
import Test from './pages/Test.vue'
import Test2 from './pages/Test2.vue'
import TestP from './pages/TestP.vue'
import TestP2 from './pages/TestP2.vue'
import Finance from './pages/Finance.vue'
import Sciense from './pages/Sciense.vue'
import VueRouter from "vue-router";

const routes = [
  {
    path: '/',
    component: Homepage,
    name: 'homepage'
  },
  {
    path: '/test',
    component: Test,
    name: 'test'
  },
  {
    path: '/test2',
    component: Test2,
    name: 'test2'
  },
  {
    path: '/testp',
    component: TestP,
    name: 'testp'
  },
  {
    path: '/testp2',
    component: TestP2,
    name: 'testp2'
  },
   {
    path: '/sciense',
    component: Sciense,
    name: 'sciense'
  },

  {
    path: '/finance',
    component: Finance,
    name: 'finance'
  },
  // {
  //   path: '/our-service',
  //   component: Servicepage,
  //   name: 'servicepage'
  // },
  // {
  //   path: '/about',
  //   component: Aboutpage,
  //   name: 'aboutpage'
  // },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router