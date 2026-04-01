import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/HomePage";
import Products from "../pages/ProductsPage";
import CartPage from "../pages/cart/CartPage";
import ProductDetail from "../pages/ProductDetail";
import AuthLayout from "../layouts/AuthLayout";
import { LoginPage } from "../pages/auth/LoginPage";
import { RegisterPage } from "../pages/auth/RegisterPage";
import ProtectedRoute from "./ProtectedRoute";
import DashboardPage from "@/pages/DashboardPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        loader: async ({ params }) => {
          const res = await fetch(
            `https://dummyjson.com/products/${params.id}`,
          );

          if (!res) {
            throw new Error("Terjadi error pada saat fetch");
          }

          return res.json();
        },
        element: <ProductDetail />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "dashboard",
        element: (
          <ProtectedRoute role="Authenticated">
            <DashboardPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/",
    element: (
      <ProtectedRoute role="Guest">
        <AuthLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default router;
