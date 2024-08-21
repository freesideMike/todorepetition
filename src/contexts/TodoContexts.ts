import { createContext } from "react";
import { Todo } from "../models/Todo";

export const TodoContexts = createContext<Todo[]>([]);
