/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseTodoReturn } from "@/pages/manager-state/local/store/use-todo";
import { createContext } from "react";

const todo = {} as  UseTodoReturn;

export const TodoContext = createContext(todo);