<!--整个项目的根组件-->

<!--1、页面的结构-->
<template>
  <div id="app">
    <nav>
      <router-link to="/home">Home</router-link> |
      <router-link to="/todolist">TodoList</router-link>
      <!-- 路由出口 -->
      <!-- 路由匹配到的组件将渲染在这里 -->
      <router-view></router-view>
    </nav>
  </div>
</template>
<!--2、组件的逻辑-->
<script>
//引入home组件
import Home from "./pages/home/index.vue";
//导出当前组件的配置
export default {
  components: {
    Home,
  },
};
</script>

<!--2、组件的样式-->
<style lang="less">
</style>