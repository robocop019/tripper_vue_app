import Vue from 'vue'
import Router from 'vue-router'
import Tripper_Index from './views/tripper_index.vue'
import Tripper_Show from './views/tripper_show.vue'
import tripper_update from './views/tripper_update.vue'

import airport_show from './views/airport_show.vue'

import Signup from './views/Signup.vue'
import login from './views/login.vue'
import Logout from './views/Logout.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Tripper_Index },
    { path: '/flight/:id', name: 'tripper_show', component: Tripper_Show },
    { path: '/flight/:id/edit', name: 'tripper_update', component: tripper_update },

    { path: '/signup', name: 'signup', component: Signup },
    { path: '/login', name: 'login', component: login },
    { path: '/logout', name: 'logout', component: Logout },

    { path: '/airports', name: 'airports', component: airport_show }
  ]
})
