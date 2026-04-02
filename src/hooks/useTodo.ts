import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

export function useTodo() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("kamu belum pasang provider di app.tsx");
  }

  return context;
}
