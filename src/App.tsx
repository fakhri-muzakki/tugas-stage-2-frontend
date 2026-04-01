import { ThemeProvider } from "./components/theme-provider";
import AuthProvider from "./providers/AuthProvider";
import FavoriteProvider from "./providers/FavoriteProvider";

const App = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AuthProvider>
        <FavoriteProvider>{children}</FavoriteProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
