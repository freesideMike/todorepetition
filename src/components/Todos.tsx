import { useContext } from "react";
import { TodoContexts } from "../contexts/TodoContexts";
import { TodoDispatchContexts } from "../contexts/TodoDispatchContexts";
import { ActionType } from "../reducer/TodoReducer";

export const Todos = () => {
  const todos = useContext(TodoContexts);
  const dispatch = useContext(TodoDispatchContexts);

  const handleDelete = (id: number) => {
    dispatch({
      type: ActionType.DELETED,
      payload: id.toString(),
    });
  };

  const handleToggle = (id: number) => {
    dispatch({
      type: ActionType.TOGGLED,
      payload: id.toString(),
    });
  };
  console.log(todos);

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.isDone ? "done" : ""}>
            {todo.text}
            <button onClick={() => handleToggle(todo.id)}>Klar</button>
            <button
              onClick={() => {
                handleDelete(todo.id);
              }}
            >
              Ta bort
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
