/* eslint-disable @typescript-eslint/no-explicit-any */

import { TODO_STATE } from "@/pages/manager-state/local/store";
import { createContext } from "react";

const todo = TODO_STATE as any;

export const TodoContext = createContext(todo);