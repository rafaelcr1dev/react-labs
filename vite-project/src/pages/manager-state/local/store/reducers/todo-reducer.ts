/* eslint-disable no-case-declarations */
import { TODO_STATE, todoActions } from "..";

/* eslint-disable @typescript-eslint/no-explicit-any */
export function todoReducer(state: any, action: any) {
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
          todo: TODO_STATE.todo
        };
  
      case todoActions.UPDATE_TODO:
        return { 
          ...state, 
          todo: TODO_STATE.todo,
          todos: state.todos.map((todo: any) =>
            todo.id === action.payload.id ? { ...todo, name: action.payload.name } : todo
        )};
  
      case todoActions.DELETE_TODO:
        return { ...state, todos: state.todos.filter((todo: any) => todo.id !== action.payload.id) };
  
      default:
        return state;
    }
  }