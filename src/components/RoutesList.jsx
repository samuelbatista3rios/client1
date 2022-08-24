import React, { useEffect, useContext } from "react";
import CaminhaoFinder from "../apis/CaminhaoFinder";
import { TrucksContext } from "../context/TrucksContext";
import { useNavigate} from "react-router-dom"


const RoutesList = (props) => {
  const { caminhao, setCaminhao } = useContext(TrucksContext);
  const Navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CaminhaoFinder.get("/");
        setCaminhao(response.data.data.caminhao);
      } catch (err) {}
    };
    fetchData();
  }, );
  
   const handleDelete = async(id) => {
    try{
    const response = await CaminhaoFinder.delete(`/${id}`);
    console.log(response);
    }catch(err){
      console.log(err)
    }
   }

   const handleUpdate = (id) => {
    Navigate(`/${id}/update`)
   }

  return (
    <div className="list-group">
      <table className="table table-hover table-dark">
        <thead>
          <tr className="bg-primary">
            <th scope="col">Id</th>
            <th scope="col">Apelido</th>
            <th scope="col">Placa</th>
            <th scope="col">Ano</th>
            <th scope="col">Cor</th>
            <th scope="col">Rendimento Km/L</th>
            <th scope="col">Alterar</th>
            <th scope="col">Deletar</th>
          </tr>
        </thead>
        <tbody>
          {caminhao && caminhao.map((caminhao) => {
            return (
              <tr key={caminhao.id}>
                <td>{caminhao.id}</td>
                <td>{caminhao.apelido}</td>
                <td>{caminhao.placa}</td>
                <td>{caminhao.ano}</td>
                <td>{caminhao.cor}</td>
                <td>{caminhao.rendimento}</td>
                <td>
                  <button onClick={()=> handleUpdate(caminhao.id)} className="btn btn-warning">Alterar</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(caminhao.id)} className="btn btn-danger">Deletar</button>
                </td>
              </tr>
            );
          })}
          {/*<tr>
            <td>1</td>
            <td>haha</td>
            <td>haha123</td>
            <td>1995</td>
            <td>amarelo</td>
            <td>123</td>
            <td>
              <button className="btn btn-warning">Alterar</button>
            </td>
            <td>
              <button className="btn btn-danger">Deletar</button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>haha</td>
            <td>haha123</td>
            <td>1995</td>
            <td>amarelo</td>
            <td>123</td>
            <td>
              <button className="btn btn-warning">Alterar</button>
            </td>
            <td>
              <button className="btn btn-danger">Deletar</button>
            </td>
          </tr>
  */}
        </tbody>
      </table>
    </div>
  );
};

export default RoutesList;
