import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createHashRouter, RouterProvider } from "react-router-dom";

import Root from "./components/pages/root/root";
import Detail from "./components/pages/detail/detail";
import Faqs from "./components/pages/faqs/faqs";
import Form from "./components/pages/form/form";
import PrivacyPolicy from "./components/pages/privacy/privacy";
import TermsService from "./components/pages/terms-service/terms-service"



const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/detail/:eventId",
    element: <Detail />,
  },
  {
    path: "/form",
    element: <Form />,
  },
  {
    path: "/faqs",
    element: <Faqs />,
  },

  {
    path: "/privacy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/terms-service",
    element: <TermsService />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />    
  
  </React.StrictMode>
);
