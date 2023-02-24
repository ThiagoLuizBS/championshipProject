import { useState } from "react";
import reactLogo from "./assets/klopplaminaz.png";
import "./App.css";
import { AppRoutes } from "./Routes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a
          href="https://www.metropoles.com/esportes/futebol/klopp-supera-guardiola-e-e-eleito-o-tecnico-do-ano-na-premier-league"
          target="_blank"
        >
          <img
            src={reactLogo}
            className="logo"
            alt="klopplaminaz"
            title="Klopp Laminaz vem aí e o bixo vai pegar"
          />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {count} GOLS
        </button>
      </div>
      {count > 6 ? (
        <div className="flex">
          <img
            src="https://upload.wikimedia.org/wikipedia/pt/9/90/ECBahia.png"
            alt="bahia"
            title="bahia"
            height="300px"
            className="pad"
          />
          <span>MAIS UM GOL DO SPORT?</span>
          <img
            src="https://images.emojiterra.com/google/android-11/512px/1f62d.png"
            alt="choro"
            title="chore nao bebe"
            height="60px"
          />
        </div>
      ) : (
        <></>
      )}
      <AppRoutes />
    </div>
  );
}

export default App;
