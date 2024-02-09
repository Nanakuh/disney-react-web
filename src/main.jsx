import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./components/pages/root";
import Detail from "./components/pages/detail";
import Faqs from "./components/pages/faqs";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/detail/:eventName",
    element: <Detail />,
  },
  {
    path: "/faqs",
    element: <Faqs />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />    
  
  </React.StrictMode>
);
