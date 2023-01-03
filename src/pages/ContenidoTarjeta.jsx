import React from "react";
import { useParams } from "react-router-dom";
import { infoTodos } from "../informacion/infoTodos";
import "../styles/contenidoTarjeta.css";

function ContenidoTarjeta() {
  const { elementId } = useParams();

  const itemEncontrado = infoTodos.find((element) => element.id == elementId);

  return (
    <main>
      <div className="contenido">
        <div className="video">
          <iframe
            width="560"
            height="315"
            src={itemEncontrado.iframeURL}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="informacion">
          <div>
            <h2>{itemEncontrado.title}</h2>
            <p></p>
          </div>
          <div>
            <h2>¿Qué es? </h2>
            <p>
              Es una forja (plataforma de desarrollo colaborativo) para alojar
              proyectos utilizando el sistema de control de versiones Git. Se
              utiliza principalmente para la creación de código fuente de
              programas de ordenador. El software que opera GitHub fue escrito
              en Ruby on Rails. Desde enero de 2010, GitHub opera bajo el nombre
              de GitHub, Inc. Anteriormente era conocida como Logical Awesome
              LLC. El código de los proyectos alojados en GitHub se almacena
              generalmente de forma pública.{" "}
            </p>
          </div>
        </div>
        {itemEncontrado.beneficios.length > 1 ? (
          <div className="beneficios">
            <h2>Beneficios: </h2>
            <ul>
              {itemEncontrado.beneficios.map((item) => (
                <li key={item.id}>
                  <i class="fa-solid fa-star"></i>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          ""
        )}
        <div className="conocimientos">
          <h2>Características de GitHub: </h2>
          <ul>
            <li>
              <i className="fa-solid fa-check"></i> Guardar proyectos de forma
              gratuita.{" "}
            </li>
            <li>
              <i className="fa-solid fa-check"></i> Los usuarios pueden entrar a
              los proyectos y colaborar para agregar funciones o mejorar las que
              ya están disponibles.{" "}
            </li>
            <li>
              <i className="fa-solid fa-check"></i> GitHub tiene diversas
              herramientas además de las proporcionadas por Git.{" "}
            </li>
            <li>
              <i className="fa-solid fa-check"></i> La plataforma tiene un
              sistema de seguimiento de problemas, por lo cual otras personas
              pueden realizar mejoras, sugerencias y optimizaciones de cada
              proyecto.{" "}
            </li>
            <li>
              <i className="fa-solid fa-check"></i> GitHub cuenta con una
              herramienta para revisar el código.{" "}
            </li>
            <li>
              <i className="fa-solid fa-check"></i> Se pueden ver gráficos sobre
              el trabajo de los desarrolladores y las ramificaciones de cada
              proyecto, así como las actualizaciones que ha tenido un software
              desde la subida a la plataforma.{" "}
            </li>
          </ul>
        </div>
      </div>

      <div className="contenido-b mt-5">
        <div className="cursos">
          <h2>Cursos: </h2>
          <ul>
            <a
              href="https://www.youtube.com/watch?v=HiXLkL42tMU"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button" className="btn btn-danger">
                Youtube
              </button>
            </a>
            <a
              href="https://www.udemy.com/course/git-github/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button" className="btn btn-primary">
                Udemy
              </button>
            </a>
            <a
              href="https://platzi.com/cursos/git-github/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button" className="btn btn-success">
                Platzi
              </button>
            </a>
          </ul>
        </div>
        <div className="documentacion">
          <h2>Documentación: </h2>
          <ul>
            <li>
              <i className="fa-solid fa-paperclip"></i>{" "}
              <a href="https://www.freecodecamp.org/espanol/news/guia-para-principiantes-de-git-y-github/">
                {" "}
                Guia para comenzar con GitHub{" "}
              </a>
            </li>
          </ul>
        </div>

        <div className="instaladores">
          <h2>Instaladores: </h2>
          <ul>
            <li>
              <a
                href="https://desktop.github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-windows"></i>
              </a>
            </li>
            <li>
              <a
                href="https://gist.github.com/derhuerst/1b15ff4652a867391f03"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linux"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default ContenidoTarjeta;
