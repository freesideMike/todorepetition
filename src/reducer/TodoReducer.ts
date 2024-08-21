import { Todo } from "../models/Todo";

export interface IAction {
  type: ActionType;
  payload: string;
}

export enum ActionType {
  ADDED,
  DELETED,
  TOGGLED,
}

export const TodoReducer = (todos: Todo[], action: IAction) => {
  switch (action.type) {
    case ActionType.ADDED:
      return [...todos, new Todo(action.payload)];

    case ActionType.DELETED:
      return todos.filter((todo) => todo.id !== +action.payload);

    case ActionType.TOGGLED:
      return todos.map((todo) => {
        if (todo.id === +action.payload) 
          return { ...todo, isDone: !todo.isDone };
        return todo;
      });

    default:
      return todos;
  }
};
