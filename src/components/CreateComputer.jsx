// CreateComputer.js
import React, { useState } from "react";
import useContextComputer from "../hooks/useContextComputer";
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../firebase"; // Importa firestore desde el archivo firebase.js

function CreateComputer() {
  const computerContext = useContextComputer();
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagen, setImagen] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    // Validación de datos
    if (!marca || !modelo || !descripcion || !imagen) {
      setError("Todos los campos son obligatorios");
      return;
    }

    // Agregar el nuevo equipo a Firestore
    try {
      const docRef = await addDoc(collection(firestore, "computers"), {
        Marca: marca,
        Modelo: modelo,
        Descripcion: descripcion,
        Imagen: imagen,
      });

      // Actualizar el contexto u otras lógicas necesarias
      // computerContext.newComputer({
      //   id: docRef.id,
      //   Marca: marca,
      //   Modelo: modelo,
      //   Descripcion: descripcion,
      //   Imagen: imagen,
      // });

      // Limpiar el formulario después de enviar
      setMarca("");
      setModelo("");
      setDescripcion("");
      setImagen("");
      setError(null); // Limpiar el error si fue exitoso
    } catch (error) {
      console.error("Error al agregar a Firestore:", error);
      setError("Error al agregar a Firestore");
    }
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="border border-2 border-secondary p-4 rounded" id="form">
        {error && <div className="alert alert-danger">{error}</div>}

        <div className="mb-3">
          <label htmlFor="imagen" className="form-label">Imagen</label>
          <input
            id="imagen"
            className="form-control"
            type="text"
            placeholder="URL de la imagen"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="marca" className="form-label">Marca</label>
          <input
            id="marca"
            className="form-control"
            type="text"
            placeholder="Marca del producto"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="modelo" className="form-label">Modelo</label>
          <input
            id="modelo"
            className="form-control"
            type="text"
            placeholder="Modelo del producto"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">Descripción</label>
          <input
            id="descripcion"
            className="form-control"
            type="text"
            placeholder="Descripción del producto"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">Guardar</button>
      </form>
    </div>

  );
}

export default CreateComputer;
