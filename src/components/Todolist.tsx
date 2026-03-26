"use client";

import { useState } from "react";
import { cn } from "../utils/utils";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export default function TodoList({ initialData }: { initialData: Todo[] }) {
  const [todos, setTodos] = useState<Todo[]>(initialData);

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return (
    <div className="space-y-3">
      {todos.map((todo) => (
        <button
          key={todo.id}
          onClick={() => toggleTodo(todo.id)}
          className={cn(
            "w-full flex items-center gap-3 rounded-xl px-4 py-3 transition",
            "border border-neutral-800 hover:bg-neutral-900",
            todo.completed && "opacity-60",
          )}
        >
          {/* Checkbox */}
          <div
            className={cn(
              "h-5 w-5 rounded-md border flex items-center justify-center",
              todo.completed
                ? "bg-green-500 border-green-500"
                : "border-neutral-500",
            )}
          >
            {todo.completed && <span className="text-xs text-black">✓</span>}
          </div>

          {/* Text */}
          <span
            className={cn(
              "text-left",
              todo.completed && "line-through text-neutral-400",
            )}
          >
            {todo.text}
          </span>
        </button>
      ))}
    </div>
  );
}
