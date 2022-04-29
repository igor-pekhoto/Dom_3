import { createContext, useEffect, useState } from "react";
import useTodos from "../hooks/useTodos";

const TodoListContext = createContext();

const TodoListProvider = ({ children }) => {
  const { todos, createTodo, completedTodo, deleteTodo, clearAllTodos } =
    useTodos();

  return (
    <TodoListContext.Provider
      value={{ todos, createTodo, completedTodo, deleteTodo, clearAllTodos }}
    >
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoListProvider;

export { TodoListContext };
