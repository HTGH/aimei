import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'
import Kefu from './views/kefu.vue'
import Introduce from './views/introduce.vue'
import Car from './views/car.vue'
import Member from './views/member.vue'
import Detail from './views/detail.vue'
Vue.use(Router);

export default new Router({
  //mode: 'history',
  routes: [
    {path: '/', component: Index},
    {path: '/index', name: 'index', component: Index},
    {path: '/kefu', name: 'kefu', component: Kefu},
    {path: '/introduce', name: 'introduce', component: Introduce},
    {path: '/car', name: 'car', component: Car},
    {path: '/member', name: 'member', component:Member},
    {path: '/detail', name: 'detail', component:Detail},
  ]
})
