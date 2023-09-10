import {ITodo, TODO_STATUS} from "@/typings";
import {REMOVE_TODO, SET_DOING, SET_TODO, SET_TODO_LIST, SET_TODO_STATUS} from "@/store/actionTypes";
import {Store, useStore} from "vuex";

export interface IUseTodo {
    setTodo: (value: string) => void;
    setTodoList: () => void;
    removeTodo: (id: number) => void;
    setStatus: (id: number) => void;
    setDoing: (id: number) => void;
}

interface IUseLocalStorageList {
    getLocalStorageList: () => ITodo[];
    setLocalStorageList: (todoList: ITodo[]) => void;
}


function useTodo (): IUseTodo  {

    const store: Store<any> = useStore()
    const { setLocalStorageList, getLocalStorageList }: IUseLocalStorageList = useLocalStorageList();
    const todoList: ITodo[] = getLocalStorageList()
    function setTodo(value: string): void {
        const todo: ITodo = {
            id: new Date().getTime(),
            content: value,
            status: TODO_STATUS.WILLDO
        }

        store.dispatch(SET_TODO, todo);
        setLocalStorageList(store.state.list)
    }

    function setTodoList (): void {
        store.dispatch(SET_TODO_LIST, todoList)
    }

    function removeTodo(id: number): void {
        store.dispatch(REMOVE_TODO, id);
        setLocalStorageList(store.state.list)
    }

    function setStatus(id: number): void {
        store.dispatch(SET_TODO_STATUS, id);
        setLocalStorageList(store.state.list);
    }

    function setDoing(id: number): void {
        store.dispatch(SET_DOING, id)
    }

    return {
        setTodo,
        setTodoList,
        removeTodo,
        setStatus,
        setDoing
    }
}

function useLocalStorageList(): IUseLocalStorageList {

    function setLocalStorageList(todoList: ITodo[]) {
        localStorage.setItem('todoList', JSON.stringify(todoList));
    }

    function getLocalStorageList(): ITodo[] {
        return JSON.parse(localStorage.getItem('todoList') || '[]')
    }

    return {
        setLocalStorageList,
        getLocalStorageList
    }
}

export {
    useTodo
}