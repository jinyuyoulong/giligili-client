<template>
  <div id="app">
    <NavBar/>
    
    <!-- 使用router -->
    <router-view></router-view>
    <!-- 使用router -->
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>

<style>

</style>
