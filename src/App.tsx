import TodoList from "./components/Todolist";
import type { Todo } from "./types";

const todosData: Todo[] = [
  { id: 1, text: "Belajar Next.js", completed: false },
  { id: 2, text: "Belajar React 19", completed: false },
  { id: 3, text: "Bangun project", completed: false },
];

const App = () => {
  return (
    <main className="min-h-screen bg-neutral-950 flex items-center justify-center p-4 ">
      <div className="max-w-md bg-neutral-900 border border-neutral-800 rounded-2xl shadow-lg p-6 ">
        <h1 className="text-xl font-semibold text-white mb-4">Todo List</h1>

        <TodoList initialData={todosData} />
      </div>
    </main>
  );
};

export default App;
