import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import FormDefault from "./components/use-reducer/form";
import ListDefault from "./components/use-reducer/list";

import { useContext } from "react";
import { TodoContext } from "@/contexts/todo-context";

const LocalStateUseReducer = () => {
  const { state } = useContext(TodoContext);

  return (
    <Card className="w-[600px] mt-8">
      <CardHeader>
        <CardTitle>TODO (UseReducer)</CardTitle>
        {state.todos.length > 0 && (
          <CardDescription>
            You haves {state.todos.length} state.todos.
          </CardDescription>
        )}
      </CardHeader>

      <CardContent className="grid gap-4">
        <FormDefault />
        <ListDefault />
      </CardContent>
    </Card>
  );
};

export default LocalStateUseReducer;
