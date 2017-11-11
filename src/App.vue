<template>
  <div id="app">

  <header id="header">
    <a href="#" v-on:click.prevent="show = !show"><i class="fa fa-bars"></i></a>
    <transition name="fade">
      <div class="menu" v-if="show">
        <ul>
          <li @click="show = !show"><router-link to="/">Главная</router-link></li>
          <li @click="show = !show"><router-link to="/clients?p=1" >Клиенты</router-link></li>
        </ul>
      </div>
    </transition>
    <div class="user__profile" >
      <a href="#"><i class="fa fa-info-circle" aria-hidden="true"></i></a>
      <div class="user__dropdown">
        <div class="user__avatar">
          <img src="http://betlikepros.de/wp-content/uploads/2016/09/b048ba4656f61319aad1e71e8a0f47b4-NEaMHVFvWpoJeh_2_b1.jpg" alt="">
        </div>
        <a href="#">{{user}}<i class="fa fa-angle-down" aria-hidden="true"></i></a>
      </div>
    </div>
  </header>

    <router-view></router-view>

  <footer id="footer">
    <div class="flex-container">
      <p>© 2017-2018 BBMur. All rights reserved.</p>
      <ul class="social__link">
        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
        <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
        <li><a href="#"><i class="fa fa-youtube" aria-hidden="true"></i></a></li>
        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
        <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
        <li><a href="#"><i class="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
      </ul>
    </div>
  </footer>
  </div>
</template>

<script>
  import vueUser from './User.vue'
  import vueClients from './Clients.vue'
  import vueHome from  './Home.vue'
export default {
  data: function () {
    return {
      user:'Jeckos',
      show: false,
      home: true,
      client: false
    }
  },
 components:{
   vueUser,
   vueClients,
   vueHome
 }
}
</script>
