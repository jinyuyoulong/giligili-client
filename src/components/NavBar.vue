<template>
<el-menu
  class="el-menu-demo"
  mode="horizontal" router="">
  <!-- 绑定 router 根据index定位 -->
  <el-menu-item index="/">首页</el-menu-item>
  <el-menu-item index="/post-video">提交视频</el-menu-item>
  <el-menu-item index="/about">关于我们</el-menu-item>
</el-menu>
</template>


<script>
  export default {
      name: 'NavBar',
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>