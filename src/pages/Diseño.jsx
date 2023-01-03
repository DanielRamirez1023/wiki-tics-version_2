import React from "react";
import Descripcion from "../components/Descripcion";
import MostrarElementos from "../containers/MostrarElementos";
import { Seleccion } from "../informacion/Seleccion";
function Diseño() {
  const informacion = {
    titulo: "Diseño",
    informacion:
      "Son programas de computadora utilizados para crear,diseñar editar y actualizar las páginas web ayudando a mejorar la experiencia de usuario y la manera visual",
  };
  return (
    <>
      <Descripcion elemento={informacion} />
      <MostrarElementos elementos={Seleccion("Diseño")} />
    </>
  );
}

export default Diseño;
