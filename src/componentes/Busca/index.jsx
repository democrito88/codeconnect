import React from 'react';
import { BsSearch } from "react-icons/bs";
import "./Busca.css";

const Busca = () => {
    return(
        <div className='busca'>
            <BsSearch />
            <input className='campo-busca' type='text' placeholder='Digite o que você procura'/>
        </div>
    );
}

export default Busca;