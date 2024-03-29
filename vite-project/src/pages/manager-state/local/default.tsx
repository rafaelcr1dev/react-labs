/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import FormDefault from "./components/default/form";
import ListDefault from "./components/default/list";

const INITIAL_TODO_STATE = { name: "", id: null };

const LocalStateDefault = () => {
  const [todos, setTodos] = useState<any>([]);
  const [todo, setTodo] = useState<any>(INITIAL_TODO_STATE);

  const handleSubmit = (e: any): void => {
    e.preventDefault();

    if (!todo.name) {
      alert("Please enter a todo name.");
      return;
    }

    if (todo.id) {
      const updatedTodos = todos.map((t: any) =>
        t.id === todo.id ? { ...t, name: todo.name } : t
      );
      setTodos(updatedTodos);
      setTodo(INITIAL_TODO_STATE);
      return;
    }

    setTodos((prev: any) => [
      ...prev,
      { id: todos.length + 1, name: todo.name },
    ]);
    setTodo(INITIAL_TODO_STATE);
  };

  const handleInputChange = useCallback((e: any) => {
    const value = e.target.value;
    setTodo((prev: any) => ({ ...prev, name: value }));
  }, []);

  const handleDeleteTodo = useCallback(
    (id: number) => {
      const updatedTodos = todos.filter((t: any) => t.id !== id);
      setTodos(updatedTodos);
    },
    [todos]
  );

  return (
    <Card className="w-[600px] mt-8">
      <CardHeader>
        <CardTitle>TODO</CardTitle>
        {todos.length > 0 && (
          <CardDescription>You haves {todos.length} todos.</CardDescription>
        )}
      </CardHeader>

      <CardContent className="grid gap-4">
        <FormDefault
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          todo={todo}
        />

        <ListDefault
          setTodo={setTodo}
          handleDeleteTodo={handleDeleteTodo}
          todos={todos}
        />
      </CardContent>
    </Card>
  );
};

export default LocalStateDefault;
