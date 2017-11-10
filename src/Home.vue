<template>
  <div id="home__content"  @showAlert="Swo">
    <h1>Это главная страница</h1>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        hide: false,
        user:'Vasya'
      }
    },
    methods:{
      Swo(user){
        alert(user)
      }
    }
  }
</script>
