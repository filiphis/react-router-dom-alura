import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sobremim from "./pages/Sobremim";
import Notfound from "./pages/Notfound";
import Menu from "./components/Menu";
import Rodape from "components/Rodape";
import PaginaPadrao from "components/PaginaPadrao";

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Home />} />
          <Route path="sobremim" element={<Sobremim />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default App;
