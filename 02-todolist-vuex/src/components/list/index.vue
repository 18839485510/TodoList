<template>
  <div>
    <transition-group class="list" tag="ul" name="fade" appear>
      <!-- <li
        class="item"
        v-for="item in this.$store.state.list"
        :key="item.id"
        @click="delItem(item.id)"
      >
        {{ item.task }}
      </li> -->
      <li
        class="item"
        v-for="item in list"
        :key="item.id"
        @click="delItem(item.id)"
      >
        {{ item.task }}
      </li>
    </transition-group>
    <p class="footer">共有{{total}}条待做事件</p>
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
import {LOAD_ITEM,DEL_ITEM} from '../../pages/todolist/store/types'
export default {
  name: "Head",
  mounted(){
      this.loadItem()
  },
  methods:{
    ...mapActions([LOAD_ITEM]),
    ...mapMutations([DEL_ITEM]),
  },
  computed:{
    // ...mapState(['list'])
    ...mapState({
      list:state=>state.todolist.list
    }),
    ...mapGetters(['total'])
  }
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
  color: #d25;
  float: right;
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