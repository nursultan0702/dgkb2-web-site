import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Gosvell from './views/Govsell.vue'
import Registration from './views/Registration.vue'
import About from './views/About.vue'
import Declaration from './views/Declaration'
import Login from './views/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/govsell',
      name: 'govsell',
      component: Gosvell
    },
    {
      path: '/govsell',
      name: 'govsell',
      component: Gosvell
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    },
    {
      path: '/declaration',
      name: 'declaration',
      component: Declaration
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    
  ]
})
