/* eslint-disable @typescript-eslint/no-explicit-any */

import ItemDefault from "./item";

const ListDefault = ({ setTodo, handleDeleteTodo, todos }: any) => {
  return (
    <>
      {todos.map((todo: any) => (
        <ItemDefault
          setTodo={setTodo}
          handleDeleteTodo={handleDeleteTodo}
          todo={todo}
        />
      ))}
    </>
  );
};

export default ListDefault;
