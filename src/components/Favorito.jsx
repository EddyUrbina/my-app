// Favorito.js
import React from "react";
import useContextComputer from "../hooks/useContextComputer";

function Favorito(props) {
  const computerContext = useContextComputer();

  return (
    <div className="col-md-3 mb-3"> {/* Ajusta la clase de la columna según tus necesidades */}
      <div className="card">
        <img className="card-img-top" src={props.value.Imagen} alt="Favorite" />
        <div className="card-body">
          <h5 className="card-title">{props.value.Marca}</h5>
          <button
            onClick={() => computerContext.deleComputerFavorites(props.value)}
            className="btn btn-danger"
          >
            <i className="fa-solid fa-trash"></i> Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Favorito;
