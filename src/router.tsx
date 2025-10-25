import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/login/login";
import Dashboard from "./layouts/Dashboard";
import HomePage from "./pages/HomePage";
import NonAuth from "./layouts/NonAuth";
import Root from "./layouts/Root";
import Users from "./pages/users/Users";
import Tenants from "./pages/tenants/Tenants";
import Products from "./pages/products/Products";
import SingleOrder from "./pages/orders/SingleOrder";
import Orders from "./pages/orders/Orders";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Dashboard />,
        children: [
          {
            path: "",
            element: <HomePage />,
          },
          {
            path: "/users",
            element: <Users />,
          },
          {
            path: "/restaurants",
            element: <Tenants />,
          },
          {
            path: "/products",
            element: <Products />,
          },
          {
            path: "/orders",
            element: <Orders />,
          },
          {
            path: "/orders/:orderId",
            element: <SingleOrder />,
          },
        ],
      },
      {
        path: "auth",
        element: <NonAuth />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
        ],
      },
    ],
  },
]);
