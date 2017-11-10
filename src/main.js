import './sass/style.scss'
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'
import vueClients from './Clients.vue'
import vueHome from  './Home.vue'
import vueUser from  './User.vue'

Vue.use(VueResource);
Vue.use(VueRouter)

const routes = [

  {path:'/clients', component: vueClients},
  {path:'/', component: vueHome},
  {path:'/user/:id', component: vueUser}
]
const router = new VueRouter({
 routes,
  mode:'history'
})


Vue.filter('sort', function (value) {
  return value.toUpperCase()
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)



});
