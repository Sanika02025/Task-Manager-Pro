import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <App />

    <Toaster
      position="top-right"
      toastOptions={{
        duration: 2500,
        style: {
          borderRadius: "12px",
          background: "#fff",
          color: "#222",
        },
      }}
    />

  </React.StrictMode>
);