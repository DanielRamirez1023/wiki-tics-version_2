import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.jpeg";
import { contexto } from "../context/context";
import "../styles/Header.css";
import Button from "./Button";

function Header() {
  const { registrado, usuario, IniciarSesion } = useContext(contexto);
  const { nombre } = usuario;

  let mostrarButton = false;
  return (
    <nav className="d-flex flex-wrap align-items-center justify-content-center  py-3  border-bottom">
      <Link
        to={"/"}
        className="d-flex align-items-center col-md-2 mb-2 mb-md-0 text-dark text-decoration-none"
      >
        <img src={Logo} alt="Logo" width="40%" />
      </Link>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <Link to={"/lenguajes"} className="nav-link px-2 link-dark">
            Lenguajes<i className="fa-sharp fa-solid fa-laptop-code"></i>
          </Link>
        </li>
        <li>
          <Link to={"/basesDatos"} className="nav-link px-2 link-dark">
            Bases de Datos<i className="fa-solid fa-database"></i>
          </Link>
        </li>
        <li>
          <Link to={"/herramientas"} className="nav-link px-2 link-dark">
            Herramientas Desarrollo
            <i className="fa-solid fa-screwdriver-wrench"></i>
          </Link>
        </li>
        <li>
          <Link to={"/diseño"} className="nav-link px-2 link-dark">
            Diseño<i className="fa-solid fa-pen-nib"></i>
          </Link>
        </li>
      </ul>
      <div className="col-md-3 text-end">
        {!IniciarSesion && (
          <>
            <Link to={"/inicio"}>
              <Button
                texto={"Registrarme"}
                clase={"btn btn-registrarme me-2"}
              />
            </Link>
            <Link to={"/inicio"}>
              <Button texto={"Iniciar Sesion"} clase={"btn btn-inicio"} />
            </Link>
          </>
        )}
        {IniciarSesion && (
          <div className="inicio-sesion">
            <p>{nombre}</p>
            <Button texto={"Cerrar Sesion"} clase={"btn btn-inicio"} />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
