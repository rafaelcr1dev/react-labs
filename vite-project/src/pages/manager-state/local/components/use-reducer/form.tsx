/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useContext } from "react";
import { useDebounce } from "use-debounce";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { TodoContext } from "@/contexts/todo-context";

const FormDefault = () => {
  const { state, dispatch, actions } = useContext(TodoContext) as any;
  const [debouncedValue] = useDebounce(state.todo, 200);

  const handleSubmit = useCallback(
    (e: any): void => {
      e.preventDefault();

      if (!state.todo.name) {
        alert("Please enter a todo name.");
        return;
      }

      if (state.todo.id) {
        dispatch({ type: actions.UPDATE_TODO, payload: state.todo });
        return;
      }

      dispatch({
        type: actions.SET_TODOS,
        payload: state.todo,
      });
    },
    [debouncedValue]
  );

  const handleInputChange = (e: any) => {
    dispatch({
      type: actions.SET_TODO,
      payload: { ...state.todo, name: e.target.value },
    });
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={state.todo.name}
            onChange={handleInputChange}
            placeholder="Add a new todo"
          />
        </div>
      </div>
    </form>
  );
};

export default FormDefault;
