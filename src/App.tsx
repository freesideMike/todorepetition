import { useReducer } from "react";
import "./App.css";
import { TodoReducer } from "./reducer/TodoReducer";
import { Todos } from "./components/Todos";
import { AddTodo } from "./components/AddTodo";
import { TodoContexts } from "./contexts/TodoContexts";
import { TodoDispatchContexts } from "./contexts/TodoDispatchContexts";

function App() {
  const [todos, dispatch] = useReducer(TodoReducer, []);

  return (
    <>
    <TodoContexts.Provider value={todos}>
      <TodoDispatchContexts.Provider value={dispatch}>
        <AddTodo></AddTodo>
        <Todos></Todos>
      </TodoDispatchContexts.Provider>
    </TodoContexts.Provider>
    </>
  );
}

export default App;
