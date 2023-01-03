import React, { useContext } from "react";
import IniciarSesion from "../components/IniciarSesion";
import Registrarme from "../components/Registrarme";
import { contexto } from "../context/context";
import { Link } from "react-router-dom";
import "../styles/inicio.css";
function Inicio() {
  const { registrado } = useContext(contexto);
  return (
    <div className="inicioSesion">
      <section className="login">
        <div className="login_box">
          <div className="left">
            <div className="top_link">
              <Link to={"/"}>
                <img
                  src="https://drive.google.com/u/0/uc?id=16U__U5dJdaTfNGobB_OpwAJ73vM50rPV&export=download"
                  alt="imagen form"
                />
                Volver Inicio
              </Link>
            </div>
            <div className="contact">
              {registrado ? <IniciarSesion /> : <Registrarme />}
            </div>
          </div>
          <div className="right">
            <div className="right-text">
              <h2>Wiki Tic's</h2>
              <h5></h5>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Inicio;
