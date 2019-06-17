import Vue from 'vue'
import Router from 'vue-router'

import tripper_show from './views/tripper_show.vue'
import tripper_update from './views/tripper_update.vue'
import tripper_index from './views/tripper_index.vue'
import tripper_new from './views/tripper_new.vue' 

import airport_index from './views/airport_index.vue'
import airport_show from './views/airport_show.vue'

import Signup from './views/Signup.vue'
import login from './views/login.vue'
import Logout from './views/Logout.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    
    { path: '/signup', name: 'signup', component: Signup },
    { path: '/login', name: 'login', component: login },
    { path: '/logout', name: 'logout', component: Logout },
    
    { path: '/', name: 'tripper_index', component: tripper_index },
    { path: '/flight/new', name: 'tripper_new', component: tripper_new},
    { path: '/flight/:id', name: 'tripper_show', component: tripper_show },
    { path: '/flight/:id/edit', name: 'tripper_update', component: tripper_update },
    
    { path: '/airports', name: 'airports', component: airport_index },
    { path: '/airport/:id', name: 'airport-show', component: airport_show }
  ]
})
