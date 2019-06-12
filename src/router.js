import Vue from 'vue'
import Router from 'vue-router'
import Tripper_Index from './views/tripper_index.vue'
import Tripper_Show from './views/tripper_show.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Tripper_Index },
    { path: '/flight/:id', name: 'tripper_show', component: Tripper_Show }
  ]
})
