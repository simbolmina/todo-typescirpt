// import { useState } from "react";
import Todos from "./components/Todos";
// import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";
import TodosContextProvider from "./store/todos-context";

function App() {
  // const [todos, setTodos] = useState<Todo[]>([]);
  // // const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];

  // const addTodoHandler = (todoText: string) => {
  //   const newTodo = new Todo(todoText);

  //   setTodos((prevTodos) => {
  //     return prevTodos.concat(newTodo);
  //   });
  // };

  // const removeTodoHandler = (todoId: string) => {
  //   setTodos((prevTodos) => {
  //     return prevTodos.filter((todo) => todo.id !== todoId);
  //   });
  // };
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
      {/* <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} /> */}
    </TodosContextProvider>
  );
}

export default App;
