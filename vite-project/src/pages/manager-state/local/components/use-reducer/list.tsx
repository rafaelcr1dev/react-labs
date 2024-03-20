/* eslint-disable @typescript-eslint/no-explicit-any */

import { useContext } from "react";
import { TodoContext } from "@/contexts/todo-context";
import ItemDefault from "./item";

const ListDefault = () => {
  const { state } = useContext(TodoContext) as any;

  return (
    <>
      {state.todos.map((todo: any) => (
        <ItemDefault todo={todo} />
      ))}
    </>
  );
};

export default ListDefault;
