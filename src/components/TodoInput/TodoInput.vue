<script lang="ts">
import {defineComponent, ref} from 'vue';
import {IUseTodo, useTodo} from "@/components/TodoInput/hooks/useTodo";

export default defineComponent({
  setup() {
    const { setTodo }: IUseTodo = useTodo()

    const todoValue = ref<string>('')
    const setTodoValue = (e: KeyboardEvent): void => {
      if(e.keyCode === 13 && todoValue.value.trim().length > 0) {
        setTodo(todoValue.value);
        todoValue.value = '';
      }
    }

    return {
      todoValue,
      setTodoValue
    }
  }
})

</script>

<template>
  <div>
    <input type="text" v-model="todoValue" @keydown="setTodoValue"/>
  </div>
</template>