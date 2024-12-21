import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Main.scss";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
