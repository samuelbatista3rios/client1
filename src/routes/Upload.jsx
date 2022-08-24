import React, { useState } from 'react'
import { useNavigate } from 'react-router';

export default function Upload() {
    const navigate = useNavigate();

    const [files, setFiles]= useState("");
    
    const uploadFile = async e =>{
        e.preventDefault();
        console.log("upload");
        console.log(files)
    }
    const handleSave = (e) =>{
        navigate("/")
      }

  return (
    <div>
        <h1> Upload </h1>
        <form onSubmit={uploadFile}>
            <label>Arquivo .csv</label>
            <input type="file" name="file" onChange={e => setFiles(e.target.files[0])}/><br></br>

            <button type="submit">Salvar</button>
            <button onCLick={handleSave} type="submit">Voltar</button>
        </form>
    </div>
  )
}
