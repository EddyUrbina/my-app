// DetallePage.js
import React from "react";
import { useParams } from "react-router";
import useContextComputer from "../hooks/useContextComputer";

export default function DetallePage() {
  const { Id } = useParams();
  const computerContext = useContextComputer();

  const computer = computerContext.listComputers.find((e) => e.id === Id);

  if (!computer) {
    // Si no se encuentra la computadora, puedes mostrar un mensaje o redirigir a una página de error
    return <div>No se encontró la computadora.</div>;
  }

  return (
    <div className="ui vertically divided grid" style={{ height: "100%" }}>
      <div className="two column row">
        <div className="column">
          <img style={{ height: "400px" }} src={computer.Imagen} alt={computer.Marca} />
        </div>
        <div className="column">
          <h1>{computer.Marca}</h1>
          <h3>{computer.Descripcion}</h3>
          <p><strong>Modelo:</strong> {computer.Modelo}</p>
          <p><strong>ID:</strong> {computer.id}</p>
          {/* Agrega más información según tus necesidades */}
        </div>
      </div>
    </div>
  );
}
