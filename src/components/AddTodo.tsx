import { FormEvent, useContext, useState } from "react";
import { ActionType } from "../reducer/TodoReducer";
import { TodoDispatchContexts } from "../contexts/TodoDispatchContexts";

export const AddTodo = () => {
  const dispatch = useContext(TodoDispatchContexts);
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch({
      type: ActionType.ADDED,
      payload: inputText,
    });
    setInputText("");
  };

  return (
    <>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button>Lägg till</button>
      </form>
    </>
  );
};
