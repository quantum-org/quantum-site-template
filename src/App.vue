<template>
  <head><meta name="google-site-verification" content="pKVCYtFFdvtjm9t9ahPI85qnypt-dKq0_r9Zg1WemvM" /></head>
  <Menu/>
  <div class="page">
    <router-view></router-view>
  </div>
</template>

<script setup>
import Menu from './components/Menu.vue'

(function(){
    var redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect && redirect != location.href) {
        history.replaceState(null, null, redirect);
    }
})();

</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #101010;
  margin-top: 60px;
}
.page {
  margin-top: 150px;
}
.logo {
  border: none;
  height: 65px;
}
iframe {
    margin: 0 auto;
}
.video-container {
    overflow: hidden;
    position: relative;
    width:80%;
}
.video-container::after {
    padding-top: 56.25%;
    display: block;
    content: '';
}
.video-container iframe {
    align: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
