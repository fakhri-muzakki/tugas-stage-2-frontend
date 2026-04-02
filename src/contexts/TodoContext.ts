import { createContext } from "react";
import type { Todo } from "../types";

type TodoContextType = {
  todos: Todo[];
  addTodo: (todo: Omit<Todo, "id">) => Promise<void>;
  editTodo: (todo: Todo) => Promise<void>;
  deleteTodo: (id: string) => Promise<void>;
};

export const TodoContext = createContext<TodoContextType | null>(null);
