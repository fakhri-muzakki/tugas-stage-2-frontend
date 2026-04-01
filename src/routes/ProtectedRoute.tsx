import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";

type Role = "Authenticated" | "Guest";

const ProtectedRoute = ({
  role,
  children,
}: {
  role: Role;
  children: React.ReactNode;
}) => {
  const { isAuthenticated } = useAuth();

  // Kalo route untuk tamu (belum login) dan ternyata sudah login
  // Kalo route untuk yang sudah login dan ternyata belum login
  if (role === "Guest" && isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  } else if (role === "Authenticated" && !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
