import type { User } from "@/types";
import { createContext } from "react";

type AuthContextType = {
  user: User | null;
  token: string | null;
  login: (data: { user: User; accessToken: string }) => void;
  logout: () => void;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

export default AuthContext;
