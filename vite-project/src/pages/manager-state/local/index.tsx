import { TodoContext } from "@/contexts/todo-context";
import { useTodo } from "./store/use-todo";
import HttpStateLocalUseReducer from "./use-reducer";

const HttpStatePage = () => {
  return (
    <TodoContext.Provider value={{ ...useTodo() }}>
      <HttpStateLocalUseReducer />
    </TodoContext.Provider>
  );
};

export default HttpStatePage;
