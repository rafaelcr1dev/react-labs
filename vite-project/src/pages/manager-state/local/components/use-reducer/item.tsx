/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useContext } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { TrashIcon, UpdateIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { TodoContext } from "@/contexts/todo-context";

const ItemDefault = ({ todo }: any) => {
  const { state, dispatch, actions } = useContext(TodoContext) as any;

  const handleDeleteTodo = useCallback(
    (todo: any) => {
      dispatch({
        type: actions.DELETE_TODO,
        payload: todo,
      });
    },
    [state.todos]
  );

  return (
    <div className="flex items-center space-x-4 rounded-md border p-4">
      <Avatar>
        <AvatarFallback>{todo.id}</AvatarFallback>
      </Avatar>
      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium leading-none">{todo.name}</p>
      </div>
      <Button
        variant="default"
        onClick={() => dispatch({ type: actions.SET_TODO, payload: todo })}
      >
        <UpdateIcon className="h-4 w-4" />
      </Button>
      <Button variant="destructive" onClick={() => handleDeleteTodo(todo)}>
        <TrashIcon className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ItemDefault;
