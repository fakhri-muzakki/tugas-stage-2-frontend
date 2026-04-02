import { useState } from "react";
import { MoreVertical, Plus, Trash2, Pencil, X } from "lucide-react";
import { useTodo } from "../hooks/useTodo";

interface Todo {
  id: string;
  title: string;
}

export default function TodoPage() {
  const { todos, addTodo, deleteTodo, editTodo } = useTodo();

  console.log(todos);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const openAddModal = () => {
    setEditingTodo(null);
    setInputValue("");
    setIsModalOpen(true);
  };

  const openEditModal = (todo: Todo) => {
    setEditingTodo(todo);
    setInputValue(todo.title);
    setIsModalOpen(true);
  };

  const handleSubmit = async () => {
    if (!inputValue.trim()) return;

    if (editingTodo) {
      const id = editingTodo.id;
      setIsModalOpen(false);
      setInputValue("");
      setEditingTodo(null);
      await editTodo({ id, title: inputValue });
    } else {
      setLoading(true);
      await addTodo({ title: inputValue });
      setLoading(false);

      if (!loading) {
        setIsModalOpen(false);
        setInputValue("");
        setEditingTodo(null);
      }
    }
  };

  return (
    <div className="min-h-screen  text-white p-6">
      <div className="max-w-2xl mx-auto bg-stone-900 p-4 rounded-xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">Todo List</h1>
          <button
            onClick={openAddModal}
            className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-xl hover:opacity-90 transition"
          >
            <Plus size={16} />
            Add Todo
          </button>
        </div>

        {/* List */}
        <div className="space-y-4">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="relative bg-[#111] border border-white/10 rounded-2xl p-4 flex items-center justify-between"
            >
              <span className="text-sm">{todo.title}</span>

              {/* Menu button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenMenuId((prev) => (prev === todo.id ? null : todo.id));
                }}
                className="p-2 rounded-lg hover:bg-white/10"
              >
                <MoreVertical size={18} />
              </button>

              {/* Dropdown */}
              {openMenuId === todo.id && (
                <div className="absolute right-4 top-12 w-36 bg-[#1a1a1a] border border-white/10 rounded-xl shadow-lg overflow-hidden z-10">
                  <button
                    onClick={() => {
                      openEditModal(todo);
                      setOpenMenuId(null);
                    }}
                    className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-white/10"
                  >
                    <Pencil size={14} /> Update
                  </button>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-400 hover:bg-red-500/10"
                  >
                    <Trash2 size={14} /> Delete
                  </button>
                </div>
              )}
            </div>
          ))}

          {todos.length === 0 && (
            <div className="text-center text-white/40 mt-10">
              Tidak ada todo
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-[#111] border border-white/10 rounded-2xl w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">
                {editingTodo ? "Update Todo" : "Add Todo"}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-white/10 rounded-lg"
              >
                <X size={16} />
              </button>
            </div>

            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Masukkan todo..."
              className="w-full mb-4 px-4 py-2 rounded-xl bg-[#0a0a0a] border border-white/10 outline-none focus:ring-2 focus:ring-white/20"
            />

            <button
              onClick={handleSubmit}
              className="w-full bg-white text-black py-2 rounded-xl hover:opacity-90"
            >
              {editingTodo ? "Update" : loading ? "Adding..." : "Add"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
