import { CartProvider } from "./providers/CartProvider";
import { ThemeProvider } from "./components/theme-provider";
import AuthProvider from "./providers/AuthProvider";

const App = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AuthProvider>
        <CartProvider>{children}</CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
