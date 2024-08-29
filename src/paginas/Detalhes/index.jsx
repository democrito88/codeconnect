import React, { useState, useEffect} from 'react';
import "./Detalhes.css";
import Busca from "./../../componentes/Busca";
import Tags from "./../../componentes/Tags";
import Card from "./../../componentes/Card";
import Comentarios from "./../../componentes/Comentarios";
import { useParams } from 'react-router-dom';
import json from "../../assets/json/cards.json";

const Detalhes = () => {
    let {id} = useParams();

    const [card, setCard] = useState(null);

    useEffect(() => {
        setCard(json.find(cartao => cartao.id == id));
    }, []);

    return(
        <div>
            <Busca />
            <Tags />
            {card ? 
                <Card 
                    comentarios={card.comentarios}
                    imagem={card.imagem}
                    compartilhamentos={card.compartilhamentos}
                    tags={card.tags}
                    texto={card.texto}
                    titulo={card.titulo}
                    key={card.id}
                />
                : 
                <h4>A notícia não carregou</h4>
            }
            
            <Comentarios id={id}/>
        </div>
    );
}

export default Detalhes;