/* eslint-disable no-undef */
import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo msg",
      completed: false,
    },
  ],
  // eslint-disable-next-line no-unused-vars
  addTodo: (todo) => {},
  // eslint-disable-next-line no-unused-vars
  updatedTodo: (id, todo) => {},
  // eslint-disable-next-line no-unused-vars
  deleteTodo: (id) => {},
  // eslint-disable-next-line no-unused-vars
  toggleComplete: (id) => {},
});

export const TodoContextProvider = TodoContext.Provider;

export const useTodo = () => {
  return useContext(TodoContext);
};
