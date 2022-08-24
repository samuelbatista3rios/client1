import React , {useState, createContext} from 'react';

export const TrucksContext = createContext();


export const TrucksContextProvider = (props) =>{
    const [caminhao, setCaminhao] = useState([])
    
    return(
        <TrucksContext.Provider value={{caminhao, setCaminhao}}>
            {props.children}
        </TrucksContext.Provider>
    )
}