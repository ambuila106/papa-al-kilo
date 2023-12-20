import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import App from './App.vue'

import SignIn from './views/SignIn.vue'
import SignUp from './views/SignUp.vue'
import Subscribe from './views/Subscribe.vue'
import Jobs from './views/Jobs.vue'

Vue.use(Router)

export default new Router({
  mode: 'history', // utilizar la API de History para rutas sin # en la URL
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/festi-sugest',
      name: 'festi-sugest',
      component: App,
      children: [
        {
          path: '/',
          name: 'home',
          component: Jobs
        },
        {
          path: '/festival-universitario/signin',
          name: 'signin',
          component: SignIn
        },
        {
          path: '/festival-universitario/signup',
          name: 'signup',
          component: SignUp
        },
        {
          path: '/festi-sugest/subscribe',
          name: 'subscribe',
          component: Subscribe
        },
        {
          path: '/festi-sugest/home',
          name: 'home',
          component: Jobs
        },
      ]
    },
  ]
})
