// 
// Computer.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useContextComputer from "../hooks/useContextComputer";
import { ComputerContext } from "../Data/ComputerContext";

function Computer(props) {
    const [verMas, setVerMas] = useState(false);
    const computerContext = useContextComputer(ComputerContext);

    const seccionVerMas = (
        <button onClick={() => setVerMas(true)} className="btn btn-success">
            <i className="fa-sharp fa-solid fa-chevron-down"></i>
        </button>
    );
    const deleteComputer = () => {
        // Llama a la función eliminarComputer pasándole el ID de la computadora
        computerContext.deleteComputer(props.value.id);
    };
    if (verMas) {
        return (
            <div className="col-md-4">
                <div className="card">
                    <img src={props.value.Imagen} className="card-img-top" alt="..." />
                    <div className="card-body" id="vermas">
                        <h5 className="card-title">{props.value.Marca}</h5>
                        <p className="card-text">{props.value.Modelo}</p>
                        <button onClick={() => setVerMas(false)} className="btn btn-success">
                            <i className="fa-solid fa-circle-xmark"></i>
                        </button>
                        <hr />
                        {props.value.Descripcion}
                        <button className="btn btn-warning" onClick={() => computerContext.fnAddFavoritesComputer(props.value)}>
                            <i className="fa-solid fa-heart"></i>
                        </button>
                        <Link className="primary" to={`/list/${props.value.id}`}>Detalle</Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="col-md-4">
            <div className="card">
                <img src={props.value.Imagen} className="card-img-top" alt="..." />
                <div className="card-body" id="vermas">
                    <h5 className="card-title">{props.value.Marca}</h5>
                    <p className="card-text">{props.value.Modelo}</p>
                    {seccionVerMas}
                    <button className="btn btn-warning" onClick={() => computerContext.addComputerFavorites(props.value)}>
                        <i className="fa-solid fa-heart"></i>
                    </button>
                    <button className="btn btn-danger" onClick={deleteComputer}>
                        <i class="fa-solid fa-trash" />
                    </button>
                    <Link className="primary" to={`/list/${props.value.id}`}>Detalle</Link>
                </div>
            </div>
        </div>
    );
}

export default Computer;
