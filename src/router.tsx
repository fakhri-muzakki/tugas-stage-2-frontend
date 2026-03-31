import { createBrowserRouter } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/HomePage";
import Products from "./pages/ProductsPage";
import CartPage from "./pages/cart/CartPage";
import ProductDetail from "./pages/ProductDetail";

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
    ],
  },
]);

export default router;
