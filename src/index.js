import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/globals.css";
import "./styles/header.css";
import "./styles/hero.css";
import "./styles/about.css";
import "./styles/tech.css";
import "./styles/projects.css";
import "./styles/footer.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
