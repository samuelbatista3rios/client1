import React, { useState } from "react";
import CaminhaoFinder from "../apis/CaminhaoFinder";
import { useParams } from "react-router";


const GetRoutes = () => {
   
    const { id } = useParams();
  //const [id, setId] = useState("");
  const [apelido, setApelido] = useState("");
  const [placa, setPlaca] = useState("");
  const [ano, setAno] = useState("");
  const [cor, setCor] = useState("");
  const [rendimento, setRendimento] = useState("");

  const handleSubmit = async (e)=>{
    e.preventDefault()
    try{
        const response = await CaminhaoFinder.get(`/${id}`, {
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
          <button onClick={handleSubmit} className="btn btn-primary">Pesquisar</button>
        </div>
      </form>
    </div>
  );
};

export default GetRoutes;
