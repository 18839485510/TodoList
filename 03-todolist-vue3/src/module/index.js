import {ref,reactive,onMounted,computed} from 'vue'

export const useInit = () => {
    const list = reactive([]);
    onMounted(() => {
        list.push({ id: 1, task: "learn vue3.0" });
    });
    const total = computed(() => {
        return list.length;
    });
    return { list, total }
}

export const useAddItem=(list)=>{
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

export const useDelItem=(list)=>{
    const delItem = (id) => {
        const index = list.findIndex((item) => item.id == id);
        list.splice(index, 1);
      };
      return {delItem}
}