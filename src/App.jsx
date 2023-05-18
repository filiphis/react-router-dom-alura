import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sobremim from "./pages/Sobremim";
import Notfound from "./pages/Notfound";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/sobremim"}>Sobre mim</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobremim" element={<Sobremim />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
