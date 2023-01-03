import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import BaseDatos from "../pages/BaseDatos";
import ContenidoTarjeta from "../pages/ContenidoTarjeta";
import Diseño from "../pages/Diseño";
import HerramientasDesarrollo from "../pages/HerramientasDesarrollo";
import { Home } from "../pages/Home";
import Inicio from "../pages/Inicio";
import Lenguajes from "../pages/Lenguajes";
import "../styles/App.css";
import { contexto } from "../context/context";
import { useInicialState } from "../hooks/useInicialState";
function App() {
  return (
    <contexto.Provider value={useInicialState()}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lenguajes" element={<Lenguajes />} />
            <Route path="/basesDatos" element={<BaseDatos />} />
            <Route path="/herramientas" element={<HerramientasDesarrollo />} />
            <Route path="/diseño" element={<Diseño />} />
            <Route
              path="/contenidoTarjeta/:elementId"
              element={<ContenidoTarjeta />}
            />
            <Route path="/inicio" element={<Inicio />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </contexto.Provider>
  );
}

export default App;
