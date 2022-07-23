import { useState } from "react";
import "./App.css"
import { GuardarProducto } from "./components/GuardarProducto";
import { MostarDatos } from "./components/MostarDatos";


const App = () => {

  const [contar, setContar] = useState(0)  
  const [datos, setDatos] = useState([]);

  return (

    <div className="container">
      <div className="row">
        <h3>Lista de productos</h3>
        <div className="col-md-4">
          <GuardarProducto contar={contar} setContar={setContar} datos={datos} setDatos={setDatos}/>
        </div>
        <div className="col-md-8">
          <MostarDatos contar={contar} setContar={setContar} datos={datos} setDatos={setDatos}/>
        </div>
      </div>
    </div>
  );
}

export default App;
