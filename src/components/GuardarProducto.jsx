import React from "react";
import { useState } from "react";
import axios from "axios";

export const GuardarProducto = ({contar, setContar}) => {
  const [nombre, setNombre] = useState("");
  const [price, setPrice] = useState("");

  const handleGuardar = () => {
    axios.post("http://localhost:5000/guardarProducto", {
      nombre : nombre,
      price : price,
    });

     setContar(contar + 1)
    
  }; // fin de la funcion handleGuardar

  return (
    <form className="my-4" >
      <div className="container">
        <div class="my-3 row">
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              placeholder="Nombre del Producto"
              required={true}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <div className="col-sm-10">
            <input
              required={true}
              type="text"
              className="form-control"
              placeholder="Price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-10">
          <button
             onClick={handleGuardar}
            className="btn btn-primary form-control"
          >
            Guardar Producto
          </button>
        </div>
      </div>
    </form>
  );
};
