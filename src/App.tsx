import TodoList from "./components/Todolist";

const App = () => {
  return (
    <main className="min-h-screen bg-neutral-950 flex items-center justify-center p-4 ">
      <div className="max-w-md bg-neutral-900 border border-neutral-800 rounded-2xl shadow-lg p-6 ">
        <h1 className="text-xl font-semibold text-white mb-4">Todo List</h1>

        <TodoList />
      </div>
      {/* <p className="">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut ipsam
        incidunt ipsa pariatur dolores accusamus officia aspernatur placeat
        cupiditate sapiente quibusdam itaque possimus, unde maiores repellendus
        blanditiis velit vel voluptatum?{" "}
      </p> */}
    </main>
  );
};

export default App;
