import React, { useState, useEffect } from "react";

import axios from "axios";

export const MostarDatos = ({contar, setContar, datos, setDatos}) => {

  const [nombreUpdate, setNombreUpdate] = useState("");
  const [priceUpdate, setPriceUpdate] = useState("");

  const [idToSave, setIdToSave] = useState(0);
  const [nombreToSave, setNombreToSave] = useState("");
  const [priceToSave, setPriceToSave] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/obtenerDatos")
      .then((response) => setDatos(response.data));

  }, [contar]);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/borrarDato/${id}`)
    setContar(contar + 1)
        
  };

  const handleUpDate = (id, title, price) => {
    setIdToSave(id);
    setNombreUpdate(title);
    setPriceUpdate(price);

  }; // fin del handleUpDate

  const update = (id) => {
    axios.patch("http://localhost:5000/Update", {
      id,
      nombreToSave,
      priceToSave,
    });
    setContar( contar + 1)
  };

  return (
    <div className="container my-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre del Producto</th>
            <th>Product Price</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((data) => {
            return (
              <tr key={data.id}>
                <td> {data.id} </td>
                <td> {data.title} </td>
                <td> {data.price} </td>
                <td>
                  <button
                    className="btn btn-danger mr-5"
                    onClick={() => {
                      handleDelete(data.id)
                     // window.location = "/"
                    }}
                  >
                    <i class="fa fa-trash"></i>
                  </button>{" "}
                  <button
                    className="btn btn-success"
                    data-toggle="modal"
                    data-target="#myModal"
                    onClick={() =>
                      handleUpDate(data.id, data.title, data.price)
                    }
                  >
                    <i className="fa fa-pen"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* fin de la table */}
      {/* inicio del modal */}

      <div class="modal" id="myModal">
        <div className="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Datas to be Updated!</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body">
              <form>                
                  <label>{ nombreUpdate }</label>
                  <input
                    type="text"
                    class="form-control my-4"
                    onChange={(e) => setNombreToSave(e.target.value)}
                  />
                
                <p> { priceUpdate } </p>
                <input
                    type="text"
                    class="form-control mb-4"
                    onChange={(e) => setPriceToSave(e.target.value)}
                  /> {" "}
    
                <button
                    type="submit"
                    class="btn btn-danger form-control"
                    data-dismiss="modal"
                    onClick={() => update(idToSave)}
                  >
                    <i class="fa fa-paper-plane"></i>
                  </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* fin del modal */}
    </div>
  );
};
