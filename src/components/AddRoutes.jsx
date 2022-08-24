import React, { useState } from "react";
import CaminhaoFinder from "../apis/CaminhaoFinder";
import { useNavigate } from "react-router-dom";


const AddRoutes = () => {
  const navigate = useNavigate();
  //const [id, setId] = useState("");
  const [apelido, setApelido] = useState("");
  const [placa, setPlaca] = useState("");
  const [ano, setAno] = useState("");
  const [cor, setCor] = useState("");
  const [rendimento, setRendimento] = useState("");

  const handleSubmit = async (e)=>{
    e.preventDefault()
    try{
        const response = await CaminhaoFinder.post("/", {
          //,
          apelido,
          placa,
          ano,
          cor,
          rendimento
        })
      console.log(response);
    }catch(err){

    }
  }
  const handleUpload = (e) =>{
    navigate("/upload")
  }
  return (

    <div className="col-lg-8 flex container row">
      <form className="form-inline" action="">
        <div className="form-row">
          <div className="col">
            {/*<input
              value={id}
              onChange={(e) => setId(e.target.value)}
              type="text"
              className="form-control"
              placeholder="id"
  />*/}
          </div>
          <div className="col">
            <input
              value={apelido}
              onChange={(e) => setApelido(e.target.value)}
              className="form-control"
              type="text"
              placeholder="apelido"
            />
          </div>
          <div className="col">
            <input
              value={placa}
              onChange={(e) => setPlaca(e.target.value)}
              className="form-control"
              type="text"
              placeholder="placa"
            />
          </div>
          <div className="col">
            <input
              value={ano}
              onChange={(e) => setAno(e.target.value)}
              className="form-control"
              type="number"
              placeholder="ano"
            />
          </div>
          <div className="col">
            <input
              value={cor}
              onChange={(e) => setCor(e.target.value)}
              className="form-control"
              type="text"
              placeholder="cor"
            />
          </div>
          <div className="col">
            <input
              value={rendimento}
              onChange={(e) => setRendimento(e.target.value)}
              className="form-control"
              type="text"
              placeholder="rendimento"
            />
          </div>
          <div className="col">
            <select className="custom-select my-1 mr-sm-2">
              <option disabled>Table Range</option>
              <option value="1">caminhao</option>
              <option value="2">localidades</option>
              <option value="3">viagens</option>
            </select>
          </div>
          <button onClick={handleSubmit} className="btn btn-primary">Adicionar</button>
          <button onClick={handleUpload} className="btn btn-primary">Atualizar</button>
        </div>
      </form>

    </div>
  );
};

export default AddRoutes;
