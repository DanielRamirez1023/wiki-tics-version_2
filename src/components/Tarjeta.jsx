import React from "react";
import { Link } from "react-router-dom";
import "../styles/Tarjeta.css";

function Tarjeta({ element }) {
  return (
    <Link to={`/contenidoTarjeta/${element.id}`} className=".contenidoTarjeta">
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="img col-md-4">
            <img
              src={element.image}
              className="img-fluid rounded-start"
              alt="imagen-tarjeta"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{element.title}</h5>
              <p className="card-text">{element.text}</p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Tarjeta;
