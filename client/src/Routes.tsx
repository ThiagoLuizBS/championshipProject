import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import { Home } from "./pages/Home";
import { Regulamento } from "./pages/Regulamento";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/regulamento" element={<Regulamento />} />
      </Routes>
    </Router>
  );
}
