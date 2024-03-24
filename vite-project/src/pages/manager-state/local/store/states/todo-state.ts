import { TodoTypes } from "@/types/todo";

type InitialTodoStatePropTypes = {
    todo: TodoTypes;
    todos: TodoTypes[];
}

export const INITIAL_TODO_STATE = {
    todo: { name: "", id: 0 },
    todos: [],
} as InitialTodoStatePropTypes;