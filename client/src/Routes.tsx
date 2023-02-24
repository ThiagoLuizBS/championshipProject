import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Tweet } from "./pages/Tweet";
import App from "./App";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Tweet />} />
      </Routes>
    </Router>
  );
}
