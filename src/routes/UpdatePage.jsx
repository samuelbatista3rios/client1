import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CaminhaoFinder from "../apis/CaminhaoFinder";
//import { TrucksContext } from "../context/TrucksContext";
import { useNavigate } from "react-router-dom";

const UpdatePage = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  //const{caminhao} = useContext(TrucksContext)
  const [apelido, setApelido] = useState("");
  const [placa, setPlaca] = useState("");
  const [ano, setAno] = useState("");
  const [cor, setCor] = useState("");
  const [rendimento, setRendimento] = useState("");

useEffect(() => {
  const fetchData = async () => {
      const response = await CaminhaoFinder.get(`/${id}`);
      console.log(response.data.data);
      setApelido(response.data.data.caminhao.apelido);
      setPlaca(response.data.data.caminhao.placa);
      setAno(response.data.data.caminhao.ano);
      setCor(response.data.data.caminhao.cor);
      setRendimento(response.data.data.caminhao.rendimento);
    };
    fetchData();
  });
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
    const updateTrucks = await CaminhaoFinder.put(`/${id}`, {
      apelido,
      placa,
      ano,
      cor,
      rendimento,
    });
    console.log(updateTrucks)
    navigate("/");
  }catch(err){}
  };

  return (
    <div>
      <form action="">
        <div className="form-group">
          <label htmlFor="apelido">Apelido</label>
          <input
            value={apelido}
            onChange={(e) => setApelido(e.target.value)}
            id="apelido"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group"
        >
          <label htmlFor="placa">Placa</label>
          <input value={placa} onChange={(e) => setCor(e.target.value)} id="placa" className="form-control" type="text" />
        </div>
        <div className="form-group"
        >
          <label htmlFor="ano">Ano</label>
          <input value={ano} onChange={(e) => setCor(e.target.value)} id="ano" className="form-control" type="number" />
        </div>
        <div className="form-group"
        >
          <label htmlFor="cor">Cor</label>
          <input value={cor} onChange={(e) => setCor(e.target.value)} id="cor" className="form-control" type="text" />
        </div>
        <div className="form-group"
        >
          <label htmlFor="rendimento">Rendimento</label>
          <input value={rendimento} onChange={(e) => setCor(e.target.value)} id="rendimento" className="form-control" type="text" />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Alterar
        </button>
      </form>
    </div>
  );
};

export default UpdatePage;
