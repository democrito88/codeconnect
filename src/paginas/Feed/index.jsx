import React from 'react';
import Cards from '../../componentes/Cards';
import "./Feed.css";
import Busca from '../../componentes/Busca';
import Tags from '../../componentes/Tags';

const Feed = () => {
    return(
        <div className='feed'>
            <Busca />
            <Tags />
            <div>
                <div className='botao-recentes'>
                    <a href="#">Recentes</a>
                    <a href="#">Recentes</a>
                </div>
                <Cards />
            </div>
        </div>
    );
}

export default Feed;