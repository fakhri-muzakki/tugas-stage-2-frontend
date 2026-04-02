import { createTodo, removeTodo, updateTodo } from "../libs/todo";
import { TodoContext } from "../contexts/TodoContext";
import { useEffect, useState } from "react";
import type { Todo } from "../types";
import toast from "react-hot-toast";

interface TodoProviderProps {
  children: React.ReactNode;
}

const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const getAllTodo = async () => {
      const res = await fetch("http://localhost:3000/api/tasks");

      if (!res.ok) {
        throw new Error("Terjadi error pada saat fetch data");
      }

      const json = await res.json();
      setTodos(json.data);
    };

    getAllTodo();
  }, []);

  const addTodo = async (todo: Omit<Todo, "id">): Promise<void> => {
    const result = await createTodo(todo);
    toast.success("Created todo successfully");
    setTodos((prev) => [...prev, result]);
  };

  const editTodo = async (todo: Todo): Promise<void> => {
    setTodos((prev) =>
      prev.map((t) => (t.id === todo.id ? { ...t, title: todo.title } : t)),
    );

    await updateTodo(todo);
    toast.success("Updated todo successfully");
  };

  const deleteTodo = async (id: string): Promise<void> => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
    await removeTodo(id);
    toast.success("Deleted todo successfully");
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, editTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
