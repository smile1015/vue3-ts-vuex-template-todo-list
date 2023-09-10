<script lang="ts">
import {defineComponent, PropType} from "vue";
import {ITodo, TODO_STATUS} from "@/typings";
interface IStatusState {
  WILLDO: TODO_STATUS,
  DOING: TODO_STATUS,
  FINISHED: TODO_STATUS
}

export default defineComponent({
  props: {
    item: Object as PropType<ITodo>
  },
  setup (props, {emit}) {
    const statusState: IStatusState = {
      WILLDO: TODO_STATUS.WILLDO,
      DOING: TODO_STATUS.DOING,
      FINISHED: TODO_STATUS.FINISHED
    }

    function setStatus(id: number) {
      emit('setStatus', id)
    }

    function setDoing(id: number) {
      emit('setDoing', id)
    }

    function removeTodo(id: number) {
      emit('removeTodo', id)
    }

    return {
      ...statusState,
      setStatus,
      setDoing,
      removeTodo
    }
  }
})

</script>

<template>
  <div>
    <input
        type="checkbox"
        :checked="item?.status === FINISHED"
        @change="setStatus(item?.id as number)"
    />
    <span
        :class="item?.status === FINISHED ? 'line-through' : false "
    >
        {{ item?.content }}
      </span>
    <button
        @click="removeTodo(item?.id as number)"
    >删除
    </button>
    <button
        v-if="item?.status !== FINISHED"
        @class="item?.status === DOING ? 'doing' : 'willdo'"
        @click="setDoing(item?.id as number)"
    >
      {{ item?.status === DOING ? '正在做...' :  '马上做' }}
    </button>
  </div>
</template>

<style lang="css">
.line-through {
  text-decoration: line-through;
}

.doing {
  background-color: #cdcdcd;
  color: #ccc;
}

.willdo {
  background: orange;
}
</style>