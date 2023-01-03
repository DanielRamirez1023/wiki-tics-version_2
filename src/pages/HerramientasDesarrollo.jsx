import React from "react";
import Descripcion from "../components/Descripcion";
import MostrarElementos from "../containers/MostrarElementos";
import { Seleccion } from "../informacion/Seleccion";
function HerramientasDesarrollo() {
  const informacion = {
    titulo: "herramientas de desarrollo",
    informacion:
      "Son programas informáticos o páginas que los desarrolladores de software utilizan para crear, depurar, mantener, encontrar solución de errores o apoyar programas y aplicaciones.",
  };
  return (
    <>
      <Descripcion elemento={informacion} />
      <MostrarElementos elementos={Seleccion("Herramientas")} />
    </>
  );
}

export default HerramientasDesarrollo;
