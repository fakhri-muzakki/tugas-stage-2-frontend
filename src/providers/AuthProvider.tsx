import AuthContext from "@/contexts/AuthContext";
import type { User } from "@/types";
import { useEffect, useState } from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}
const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = ({
    user,
    accessToken,
  }: {
    user: User;
    accessToken: string;
  }) => {
    setUser(user);
    setToken(accessToken);

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("accessToken", accessToken);
  };

  const logout = (): void => {
    console.log("=============================== masuk");
    setUser(null);
    setToken(null);

    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
  };

  return (
    <AuthContext.Provider
      value={{ login, logout, token, user, isAuthenticated: !!token }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
