import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { contexto } from "../context/context";
import { usuarios } from "../informacion/usuarios";
import "../styles/inicio.css";
function Registrarme() {
  const navigate = useNavigate();
  const form = useRef(null);
  const { registrarUsuario, setRegistrado } = useContext(contexto);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const usuario = {
      nombre: formData.get("usuario"),
      contraseña: formData.get("contraseña"),
    };
    const usuarioEcontrado = usuarios.find(
      (element) => element.nombre === usuario.nombre
    );

    if (usuarioEcontrado == undefined) {
      registrarUsuario(usuario);
      setRegistrado(true);
      Swal.fire({
        icon: "success",
        title: "Usuario Registrado correctamente",
      });
      navigate("/inicio");
    } else {
      Swal.fire({
        icon: "info",
        title: "Usuario ya esta registrado",
      });
    }
  };
  return (
    <>
      <form ref={form} onSubmit={handleSubmit}>
        <h3>Registrarme</h3>
        <input type="text" name="usuario" placeholder="Nombre Usuario" />
        <input type="password" name="contraseña" placeholder="Contraseña" />
        <button className="submit">Registrarme</button>
      </form>
    </>
  );
}

export default Registrarme;
