import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { HeaderApp } from "./components/Header";
import { Admin } from "./pages/Admin";
import { Detalhes } from "./pages/Detalhes";
import { Equipes } from "./pages/Equipes";
import { Home } from "./pages/Home";
import { Regulamento } from "./pages/Regulamento";

export function AppRoutes() {
  return (
    <Router>
      <HeaderApp />
      <Routes>
        <Route path="/" element={<Home id={"1"} />} />
        <Route path="/cartola" element={<Home id={"2"} />} />
        <Route path="/equipes" element={<Equipes id={"1"} />} />
        <Route path="/equipes-cartola" element={<Equipes id={"2"} />} />
        <Route path="/regulamento" element={<Regulamento id={"1"} />} />
        <Route path="/regulamento-cartola" element={<Regulamento id={"2"} />} />
        <Route path="/:campeonato/equipe/:id" element={<Detalhes />} />
        <Route path="/admin/:id" element={<Admin />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
