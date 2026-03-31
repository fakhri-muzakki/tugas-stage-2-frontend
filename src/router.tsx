import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import MainLayout from "./layouts/MainLayout";
import Products from "./pages/posts/Posts";
import NotFoundPage from "./pages/NotFound";
import ProductDetail from "./pages/PostDetail";
import fetchData from "./utils/fetchData";

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
        path: "about",
        element: <About />,
      },
      {
        path: "posts",
        loader: async () => {
          return fetchData("https://jsonplaceholder.typicode.com/posts");
        },
        element: <Products />,
      },
      {
        path: "posts/:id",
        loader: async ({ params }) => {
          return fetchData(
            `https://jsonplaceholder.typicode.com/posts/${params.id}`,
          );
        },
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
