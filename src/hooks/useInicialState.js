import React, { useState } from "react";
import { usuarios } from "../informacion/usuarios";

function useInicialState() {
  const initUsuario = {
    nombre: "",
    contraseña: "",
  };

  const [registrado, setRegistrado] = useState(false);
  const [IniciarSesion, setIniciarSesion] = useState(false);
  const [usuario, setUsuario] = useState(initUsuario);

  const addUsuario = (objeto) => {
    setUsuario({
      nombre: objeto.nombre,
      contraseña: objeto.contraseña,
    });
  };

  const registrarUsuario = (objeto) => {
    usuarios.push(objeto);
    console.log(usuarios);
  };

  return {
    registrado,
    usuario,
    IniciarSesion,
    setRegistrado,
    addUsuario,
    setIniciarSesion,
    registrarUsuario,
  };
}

export { useInicialState };
