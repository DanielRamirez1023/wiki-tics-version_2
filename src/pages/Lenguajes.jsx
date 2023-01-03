import React from "react";
import MostrarElementos from "../containers/MostrarElementos";
import Descripcion from "../components/Descripcion";
import { Seleccion } from "../informacion/Seleccion";
function Lenguajes() {
  const informacion = {
    titulo: "Lenguajes",
    informacion:
      "Un lenguaje de de programacion es lo que los programadores utilizan para comunicarse y para desarrollar programas de software, aplicaciones, páginas webs, scripts u otros conjuntos de instrucciones para que sean ejecutadas por los ordenadores.",
  };
  return (
    <>
      <Descripcion elemento={informacion} />
      <MostrarElementos elementos={Seleccion("lenguajes")} />
    </>
  );
}

export default Lenguajes;
