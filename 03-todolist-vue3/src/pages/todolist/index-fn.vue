<template>
  <div class="todolist">
    <div class="head">
      <input type="text" v-model="task" />
      <button @click="addItem">提交</button>
    </div>
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
    <p class="footer">共计{{ total }}个项目</p>
  </div>
</template>

<script>
import { ref, computed, onMounted, reactive } from "vue";

function useInit() {
  const list = reactive([]);
  onMounted(() => {
    list.push({ id: 1, task: "learn vue3.0" });
  });
  const total = computed(() => {
    return list.length;
  });
  return {list,total}
}

function useAddItem(list){
   let task = ref("");
    const addItem = () => {
      list.push({
        id: Date.now(),
        task: task.value,
      });
      task.value = "";
    };
    return {task,addItem}
}

function useDelItem(list){
    const delItem = (id) => {
      const index = list.findIndex((item) => item.id == id);
      list.splice(index, 1);
    };
    return {delItem}
}
export default {
  name: "TodoList",
  setup() {

    //初始化项目
      const {list,total} = useInit()

    //添加事件监听
    const {task,addItem} = useAddItem(list)

    //移除事件监听
    const {delItem} = useDelItem(list)
    
    return { list, task, total, addItem, delItem };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.todolist {
  width: 800px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
}
.todolist .head {
  display: flex;
  height: 40px;
  margin-bottom: 10px;
}
.todolist .head input {
  width: 700px;
  outline: none;
  padding: 10px;
  font-size: 28px;
}
.todolist .head button {
  width: 100px;
}
.todolist .item {
  width: 100%;
  line-height: 40px;
  padding: 5px 0;
  border-bottom: 1px dashed #ccc;
  cursor: pointer;
}
.todolist .item:hover {
  background-color: #eee;
}
.todolist .footer {
  margin-top: 15px;
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