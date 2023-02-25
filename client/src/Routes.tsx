import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import { Home } from "./pages/Home";
import { Troll } from "./pages/Troll";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/regulamento" element={<Troll />} />
      </Routes>
    </Router>
  );
}
