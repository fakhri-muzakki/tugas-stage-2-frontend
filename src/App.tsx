import TodoProvider from "./providers/TodoProvider";

const App = ({ children }: React.PropsWithChildren) => {
  return <TodoProvider>{children}</TodoProvider>;
};

export default App;
