import React from "react";
import Flecha from "../components/Flecha";
import "../styles/Banner.css";
function Banner() {
  return (
    <>
      <section className="text-center container banner">
        <div className="row pt-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1>Bienvenido a WIKI TIC'S</h1>
            <p className="">
              Somos una aplicacion web que busca fomentar el uso de las
              diferentes herramientas y sofware disponibles en el internet,
              dandote a conocer de una manera mas clara y objetiva.
            </p>
            <Flecha />
          </div>
        </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f3f4f5"
          fillOpacity="1"
          d="M0,288L34.3,282.7C68.6,277,137,267,206,272C274.3,277,343,299,411,309.3C480,320,549,320,617,298.7C685.7,277,754,235,823,197.3C891.4,160,960,128,1029,128C1097.1,128,1166,160,1234,170.7C1302.9,181,1371,171,1406,165.3L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
    </>
  );
}

export default Banner;
