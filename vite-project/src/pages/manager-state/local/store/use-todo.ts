/* eslint-disable @typescript-eslint/no-explicit-any */
import { useReducer } from "react"

import { INITIAL_TODO_STATE } from './states';
import { todoReducer } from './reducers';
import { todoActions } from './actions';
import { TodoTypes } from "@/types/todo";

export type UseTodoReturn = {
    state: {
        todos: TodoTypes[];
        todo: TodoTypes;
    };
    dispatch: React.Dispatch<any>;
    actions: typeof todoActions
    states: typeof INITIAL_TODO_STATE
}


export const useTodo = (): UseTodoReturn => {
    const [state, dispatch] = useReducer(todoReducer, INITIAL_TODO_STATE);
  
    return {
        state, 
        dispatch,
        actions: todoActions,
        states: INITIAL_TODO_STATE
    }
  }