import { Link, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils"; // helper dari shadcn
import { useAuth } from "@/hooks/useAuth";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Cart", path: "/cart" },
];

const Navbar = () => {
  const { logout } = useAuth();

  return (
    <header className="border-b bg-background fixed top-0 w-full">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-lg font-semibold tracking-tight">
          MyApp
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors",
                  "text-muted-foreground hover:text-foreground",
                  isActive && "text-foreground",
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
          <button
            className="px-4 py-2 bg-red-800 text-red-50 rounded-lg font-semibold"
            onClick={logout}
          >
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
