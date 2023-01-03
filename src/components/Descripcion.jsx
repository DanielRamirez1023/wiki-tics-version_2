import React from "react";

function Descripcion({ elemento }) {
  return (
    <>
      <div className="wrap">
        <button className="buttoncito">{elemento.titulo}</button>
      </div>
      <div className="texto-descriptivo">
        <p>{elemento.informacion}</p>
      </div>
    </>
  );
}

export default Descripcion;
