import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Details from "../Pages/Details";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/service.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: () => fetch("/service.json"),
      },
    ],
  },
]);

export default router;
