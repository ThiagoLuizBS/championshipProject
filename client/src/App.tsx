import { HeaderApp } from "./components/Header";
import { Regulamento } from "./pages/Regulamento";
import { AppRoutes } from "./Routes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <HeaderApp />
      <AppRoutes />
    </>
  );
}

export default App;
