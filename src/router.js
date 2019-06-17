import Vue from 'vue'
import Router from 'vue-router'
import TripperIndex from './views/tripper/tripper-index.vue'
import TripperShow from './views/tripper/tripper-show.vue'
import TripperUpdate from './views/tripper/tripper-update.vue'

import AirportShow from './views/airports/airport-show.vue'

import Signup from './views/credentials/Signup.vue';
import Login from './views/credentials/Login.vue'   
import Logout from './views/credentials/Logout.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: TripperIndex },
    { path: '/flight/:id', name: 'tripper-show', component: TripperShow },
    { path: '/flight/:id/edit', name: 'tripper-update', component: TripperUpdate },

    { path: '/airport/:id', name: 'airport-show', component: AirportShow },

    { path: '/signup', name: 'signup', component: Signup },
    { path: '/login', name: 'login', component: Login },
    { path: '/logout', name: 'logout', component: Logout }
  ]
})
