import { UserTypes } from "@/types/user";
import { createContext } from "react";

const user = {} as UserTypes;

export const UserContext = createContext<UserTypes>(user);