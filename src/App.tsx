import { CartProvider } from "./CartProvider";
import { ThemeProvider } from "./components/theme-provider";

const App = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <CartProvider>{children}</CartProvider>
    </ThemeProvider>
  );
};

export default App;
