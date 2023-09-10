<script lang="ts">
import {computed, defineComponent, onMounted} from 'vue';
import TodoList from './components/TodoList/TodoList.vue'
import TodoInput from './components/TodoInput/TodoInput.vue';
import {useTodo} from "@/components/TodoInput/hooks/useTodo";
import {Store, useStore} from "vuex";

export default defineComponent({
  components: {
    TodoList,
    TodoInput
  },
  setup () {
    const store: Store<any> = useStore();
    const { setTodoList } = useTodo();
    onMounted(() => {
      setTodoList()
    });
    return {
      todoList: computed(() => store.state.list)
    }
  }
})
</script>
<template>
  <TodoInput></TodoInput>
  <TodoList :todoList="todoList"></TodoList>
</template>