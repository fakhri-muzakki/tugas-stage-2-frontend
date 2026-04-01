import { createBrowserRouter } from "react-router";
// import Home from "./pages/Home";
import About from "../pages/About";
import MainLayout from "../layouts/MainLayout";
// import Products from "./pages/posts/Posts";
import NotFoundPage from "../pages/NotFound";
import ProductDetail from "../pages/PostDetail";
import fetchData from "../utils/fetchData";
import Movies from "../pages/movies/Movies";
import AuthLayout from "../layouts/AuthLayout";
import { LoginPage } from "../pages/auth/LoginPage";
import { RegisterPage } from "../pages/auth/RegisterPage";
import ProtectedRoute from "./ProtectedRoute";
import Favorite from "@/pages/movies/Favorite";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        loader: async () => {
          return fetchData(
            "https://api.themoviedb.org/3/movie/popular?api_key=4dba1a7bd161445f3f1ce20c57bddd34",
          );
        },
        element: <Movies />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "movies",
        loader: async () => {
          return fetchData(
            "https://api.themoviedb.org/3/movie/popular?api_key=4dba1a7bd161445f3f1ce20c57bddd34",
          );
        },
        element: <Movies />,
      },
      {
        path: "favorites",
        element: (
          <ProtectedRoute role="Authenticated">
            <Favorite />
          </ProtectedRoute>
        ),
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
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
