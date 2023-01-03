import React from "react";
import Banner from "../containers/Banner";
import MostrarElementos from "../containers/MostrarElementos";
import { infoTodos } from "../informacion/infoTodos";
import { usuarios } from "../informacion/usuarios";
const Home = () => {
  let elementosAleatorios = [];

  function getRandomInt() {
    return Math.floor(Math.random() * 16);
  }

  for (let index = 0; index < 4; index++) {
    elementosAleatorios.push(infoTodos[getRandomInt()]);
  }

  return (
    <>
      <Banner />
      <h1 style={{ background: "#f3f4f5", padding: "50px 0", margin: "0" }}>
        Los mas destacados<i className="fa-solid fa-chart-simple"></i>
      </h1>
      <MostrarElementos elementos={elementosAleatorios} clase={"white"} />
    </>
  );
};

export { Home };
