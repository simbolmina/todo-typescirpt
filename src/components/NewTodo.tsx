import React, { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import styles from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  // const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todosCtx = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    // todosCtx.onAddTodo(enteredText);
    todosCtx.addTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
