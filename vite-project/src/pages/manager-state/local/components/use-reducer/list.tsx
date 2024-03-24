/* eslint-disable @typescript-eslint/no-explicit-any */

import { useContext } from "react";
import { TodoContext } from "@/contexts/todo-context";
import ItemDefault from "./item";
import { TodoTypes } from "@/types/todo";

const ListDefault = () => {
  const { state } = useContext(TodoContext);

  return (
    <>
      {state.todos.map((todo: TodoTypes) => (
        <ItemDefault todo={todo} />
      ))}
    </>
  );
};

export default ListDefault;
