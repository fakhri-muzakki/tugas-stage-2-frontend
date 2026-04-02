import type { Todo } from "../types";

export const getAllTodo = async (): Promise<Todo[]> => {
  const res = await fetch("http://localhost:3000/api/tasks");

  if (!res.ok) {
    throw new Error("Terjadi error pada saat fetch data");
  }

  const json = await res.json();
  return json.data;
};

export const createTodo = async (todo: Omit<Todo, "id">) => {
  const res = await fetch("http://localhost:3000/api/tasks", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(todo),
  });

  if (!res.ok) {
    throw new Error("Terjadi error pada saat add data");
  }

  const json = await res.json();
  return json.data;
};

export const updateTodo = async (todo: Todo) => {
  const res = await fetch(`http://localhost:3000/api/tasks/${todo.id}`, {
    headers: { "Content-Type": "application/json" },
    method: "PUT",
    body: JSON.stringify(todo),
  });

  if (!res.ok) {
    throw new Error("Terjadi error pada saat update data");
  }

  const json = await res.json();
  return json.data;
};

export const removeTodo = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/tasks/${id}`, {
    headers: { "Content-Type": "application/json" },
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Terjadi error pada saat remove data");
  }

  return res.json();
};
