<template>
    <div id="app">
        <TodoList />
    </div>
</template>

<script>
import TodoList from './pages/todolist/index-md.vue'
export default {
  name: 'App',
  components:{
    TodoList
  }
}
</script>
