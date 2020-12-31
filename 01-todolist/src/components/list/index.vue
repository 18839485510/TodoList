<template>
  <div>
    <transition-group class="list" tag="ul" name="fade" appear>
      <li
        class="item"
        v-for="item in list"
        :key="item.id"
        @click="delItem(item.id)"
      >
        {{ item.task }}
      </li>
    </transition-group>
    <p class="footer">共有{{ total }}条待做事件</p>
  </div>
</template>

<script>
export default {
  name: "Head",
  props: {
    list: {
      type: Array,
      default: [],
    },
    delItem: {
      type: Function,
    },
  },
  computed: {
    total() {
      return this.list.length;
    },
  },
};
</script>

<style lang="less" scoped>
.item {
  width: 100%;
  line-height: 40px;
  padding: 5px 0;
  border-bottom: 1px dashed #ccc;
  cursor: pointer;
}

.item:hover {
  background-color: #eee;
}
.footer {
  margin-top: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>