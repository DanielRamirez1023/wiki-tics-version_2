import React from "react";
import "../styles/Destacados.css";
import Tarjeta from "../components/Tarjeta";

function MostrarElementos({ elementos, clase }) {
  return (
    <div className="seccion-tarjetas">
      <div className={clase ? "tarjetas white" : "tarjetas"}>
        {elementos.map((element, index) => (
          <Tarjeta element={element} key={element.id} posicion={index} />
        ))}
      </div>
    </div>
  );
}

export default MostrarElementos;
