<!--1.模板-->
<template>
  <div class="home">{{ msg }} home page</div>
</template>

<!--2.逻辑-->
<script>
////导出当前组件的配置
export default {
  name: "Home",
  data() {
    return {
      msg: "hello",
    };
  },
};
</script>

<!--3.样式-->

<!--scoped 会给当前组件的所有标签动态生成一个属性，作为属性选择器来确保当前样式只作用到当前组件的页面-->
<style lang="less" scoped>
@price-color: #f98;
div {
  color: @price-color;
}
</style>