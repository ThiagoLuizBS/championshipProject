import ReactDOM from "react-dom/client";
import App from "./App";

import "./styles/index/index.css";
import "./styles/index/App.css";

import "./styles/pages/Home.css";
import "./styles/pages/Equipes.css";
import "./styles/pages/Regulamento.css";
import "./styles/pages/Detalhes.css";
import "./styles/pages/Admin.css";

import "./styles/components/Header.css";
import "./styles/components/Games.css";
import "./styles/components/Table.css";
import "./styles/components/Download.css";
import "./styles/components/EditGame.css";
import "./styles/components/BrandCampeonato.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
