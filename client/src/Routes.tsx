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
        <Route path="/" element={<Home />} />
        <Route path="/equipes" element={<Equipes />} />
        <Route path="/equipes/:id" element={<Detalhes />} />
        <Route path="/regulamento" element={<Regulamento />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
