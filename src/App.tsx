import { ThemeProvider } from "./components/theme-provider";

const App = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {children}
    </ThemeProvider>
  );
};

export default App;
