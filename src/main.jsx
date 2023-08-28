import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./routes/error-page";
import Light from "./routes/light";
import SandBox from "./routes/sandbox";
import Sales from "./routes/sales";
import Search from "./routes/search";
import Filter from "./routes/filter";
Filter;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/light",
    element: <Light />,
  },
  {
    path: "/sandbox",
    element: <SandBox />,
  },
  {
    path: "/sales",
    element: <Sales />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/filter",
    element: <Filter />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
