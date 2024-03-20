/* eslint-disable @typescript-eslint/no-explicit-any */

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { TrashIcon, UpdateIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";

const ItemDefault = ({ setTodo, handleDeleteTodo, todo }: any) => {
  return (
    <div className="flex items-center space-x-4 rounded-md border p-4">
      <Avatar>
        <AvatarFallback>{todo.id}</AvatarFallback>
      </Avatar>
      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium leading-none">{todo.name}</p>
      </div>
      <Button variant="default" onClick={() => setTodo(todo)}>
        <UpdateIcon className="h-4 w-4" />
      </Button>
      <Button variant="destructive" onClick={() => handleDeleteTodo(todo.id)}>
        <TrashIcon className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ItemDefault;
