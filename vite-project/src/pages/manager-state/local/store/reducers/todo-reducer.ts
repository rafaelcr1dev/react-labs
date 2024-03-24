/* eslint-disable no-case-declarations */
import { TodoTypes } from "@/types/todo";
import { INITIAL_TODO_STATE, todoActions } from "..";

type ActionPropTypes = {
  payload: TodoTypes;
  type: typeof todoActions.SET_TODO | typeof todoActions.SET_TODOS | typeof todoActions.UPDATE_TODO | typeof todoActions.DELETE_TODO;
}

type StatePropTypes = {
  todo: TodoTypes;
  todos: TodoTypes[];
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export function todoReducer(state: StatePropTypes, action: ActionPropTypes) {
    switch (action.type) {
      case todoActions.SET_TODO:
        return { ...state, todo: action.payload };
  
      case todoActions.SET_TODOS:
        return { 
          ...state, 
          todos: [...state.todos, 
            { 
              id: state.todos.length + 1, 
              name: action.payload.name 
            }
          ], 
          todo: INITIAL_TODO_STATE.todo
        };
  
      case todoActions.UPDATE_TODO:
        return { 
          ...state, 
          todo: INITIAL_TODO_STATE.todo,
          todos: state.todos.map((todo: any) =>
            todo.id === action.payload.id ? { ...todo, name: action.payload.name } : todo
        )};
  
      case todoActions.DELETE_TODO:
        return { ...state, todos: state.todos.filter((todo: any) => todo.id !== action.payload.id) };
  
      default:
        return state;
    }
  }