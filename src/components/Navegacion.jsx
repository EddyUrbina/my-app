import React, { useState } from "react";
import { Link } from "react-router-dom";
import useContextComputer from "../hooks/useContextComputer";
import "../App.css";

function Navegacion() {
  const computerContext = useContextComputer();
  const [marca, setMarca] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Realiza la búsqueda solo si la marca no está vacía
    if (marca.trim() !== "") {
      computerContext.searchComputer({
        Marca: marca,
      });
    } else {
      // Si la marca está vacía, muestra todas las computadoras
      computerContext.searchComputer({});
    }
  };

  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">
          Home
        </Link>
        <Link className="navbar-brand text-light" to="/list">
          Computers
        </Link>
        <Link className="navbar-brand text-light" to="/favorite">
          Favorite
        </Link>
        <Link className="navbar-brand text-light" to="/create">
          New
        </Link>
        <form className="d-flex" onSubmit={handleSubmit}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Buscar por Marca"
            aria-label="Search"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
          />
          <input type="submit" className="btn btn-outline-success" value="Search" />
        </form>
      </div>
    </nav>
  );
}

export default Navegacion;
