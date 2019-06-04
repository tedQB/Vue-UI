<template>
  <div id="app">
    <img src="assets/img/logo.png">
    <router-view/>
  </div>
</template>

<script>
  import mainHeader from './components/header.vue'
  // import mainFooter from './components/footer.vue'
  // import sideNav from './components/side-nav.vue'
  // import mainSkeleton from './main.skeleton.vue'

  export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
