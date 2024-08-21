import { createContext, Dispatch } from "react";
import { IAction } from "../reducer/TodoReducer";

export const TodoDispatchContexts = createContext<Dispatch<IAction>>(() => {
  return;
});
