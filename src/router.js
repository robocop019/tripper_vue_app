import Vue from 'vue'
import Router from 'vue-router'
import TripperIndex from './views/tripper-index.vue'
import TripperShow from './views/tripper-show.vue'
import AirportShow from './views/airport-show.vue'

import Signup from './views/Signup.vue';
import Login from './views/Login.vue' 
import Logout from './views/Logout.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: TripperIndex },
    { path: '/flight/:id', name: 'tripper-show', component: TripperShow },
    { path: '/airport/:id', name: 'airport-show', component: AirportShow },
    { path: '/signup', name: 'signup', component: Signup },
    { path: '/login', name: 'login', component: Login },
    { path: '/logout', name: 'logout', component: Logout }
  ]
})
