import { TodoContext } from "@/contexts/todo-context";
import { useTodo } from "./store/use-todo";
import StateLocalUseReducer from "./use-reducer";

const LocalStatePage = () => {
  return (
    <TodoContext.Provider value={{ ...useTodo() }}>
      <StateLocalUseReducer />
    </TodoContext.Provider>
  );
};

export default LocalStatePage;
