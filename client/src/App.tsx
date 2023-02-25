import { HeaderApp } from "./components/Header";
import { Troll } from "./pages/Troll";
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
