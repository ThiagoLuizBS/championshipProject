import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Equipes } from "./pages/Equipes";
import { Home } from "./pages/Home";
import { Regulamento } from "./pages/Regulamento";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/equipes" element={<Equipes />} />
        <Route path="/regulamento" element={<Regulamento />} />
      </Routes>
    </Router>
  );
}
