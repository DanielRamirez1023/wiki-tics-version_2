import React, { useContext, useEffect } from "react";
import { contexto } from "../context/context";

function Button({ texto, clase }) {
  const { setRegistrado, setIniciarSesion } = useContext(contexto);

  return (
    <button
      type="button"
      className={clase}
      onClick={() =>
        texto == "Registrarme"
          ? setRegistrado(false)
          : texto == "Iniciar Sesion"
          ? setRegistrado(true)
          : texto == "Cerrar Sesion"
          ? setIniciarSesion(false)
          : ""
      }
    >
      {texto}
    </button>
  );
}

export default Button;
