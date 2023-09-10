<script lang='ts'>
import TodoListItem from './TodoItem.vue'
import {defineComponent, PropType} from 'vue';
import {ITodo} from "@/typings";
import {IUseTodo, useTodo} from "@/components/TodoInput/hooks/useTodo";

export default defineComponent({
  components: {
    TodoListItem
  },
  props: {
    todoList: Array as PropType<ITodo[]>
  },
  setup() {
    const { removeTodo, setStatus, setDoing }: IUseTodo = useTodo()

    return {
      removeTodo,
      setStatus,
      setDoing
    }
  }

})
</script>
<template>
  <div>todo-list</div>
  <TodoListItem
      v-for="item in todoList"
      :key="item.id"
      :item="item"
      @removeTodo="removeTodo"
      @setStatus="setStatus"
      @setDoing="setDoing"
  />
</template>