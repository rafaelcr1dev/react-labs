import { useReducer } from "react"

import { TODO_STATE } from './states';
import { todoReducer } from './reducers';
import { todoActions } from './actions';

export const useTodo = () => {
    const [state, dispatch] = useReducer(todoReducer, TODO_STATE);
  
    return {
        state, 
        dispatch,
        actions: todoActions,
        states: TODO_STATE
    }
  }