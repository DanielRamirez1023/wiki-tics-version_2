import React, { useEffect } from "react";
import MostrarElementos from "../containers/MostrarElementos";
// import { infoBaseDatos } from "../informacion/baseDatos";
import Descripcion from "../components/Descripcion";
import { Seleccion } from "../informacion/Seleccion";

function BaseDatos() {
  const informacion = {
    titulo: "Bases de Datos",
    informacion:
      "Una base de datos es un “almacén” que nos permite guardar grandes cantidades de información de forma organizada para que luego podamos encontrar y utilizar fácilmente.",
  };

  return (
    <>
      <Descripcion elemento={informacion} />
      <MostrarElementos elementos={Seleccion("Bases de datos")} />
    </>
  );
}

export default BaseDatos;
