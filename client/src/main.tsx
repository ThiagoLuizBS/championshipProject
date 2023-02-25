import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./styles/index/index.css";
import "./styles/index/App.css";
import "./styles/components/Header.css";
import "./styles/components/Games.css";
import "./styles/components/Table.css";
import "./styles/pages/Home.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
