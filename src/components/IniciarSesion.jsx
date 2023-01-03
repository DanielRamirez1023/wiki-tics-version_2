import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { contexto } from "../context/context";
import { usuarios } from "../informacion/usuarios";
import "../styles/inicio.css";
function IniciarSesion() {
  const navigate = useNavigate();
  const form = useRef(null);
  const { addUsuario, setIniciarSesion } = useContext(contexto);

  const iniciarSesion = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const usuario = {
      nombre: formData.get("usuario"),
      contraseña: formData.get("contraseña"),
    };
    const usuarioEcontrado = usuarios.find(
      (element) => element.nombre === usuario.nombre
    );

    console.log("usuario encontrado: " + usuarioEcontrado);

    if (usuarioEcontrado != undefined) {
      addUsuario(usuario);
      setIniciarSesion(true);
      navigate("/");
    } else {
      Swal.fire({
        icon: "error",
        title: "Usuario no ha sido registrado",
        confirmButtonText: "continuar",
      });
    }
  };
  return (
    <form ref={form} onSubmit={iniciarSesion}>
      <h3>Iniciar Sesion</h3>
      <input type="text" name="usuario" placeholder="Nombre Usuario" />
      <input type="password" name="contraseña" placeholder="Contraseña" />
      <button className="submit">Iniciar Sesion</button>
    </form>
  );
}

export default IniciarSesion;
