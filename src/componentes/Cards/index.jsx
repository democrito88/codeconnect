import React, { useState, useEffect} from 'react';
import "./Cards.css";
import json from "../../assets/json/cards.json";
import Card from "../Card";

/*interface CardProps{
    titulo: string,
    texto: string,
    imagem: string,
    tags: number,
    comentarios: number,
    compartilhamentos: number
}*/

const Cards = () => {
    const [cards, setCards] = useState(null);

    useEffect(()=>{
        setCards(json);
    }, [json]);

    return(
        <div className="cards">
            {
                cards ?
                cards.map(card =>
                    <Card 
                    key={card.titulo}
                    titulo={card.titulo} 
                    texto={card.texto} 
                    imagem={card.imagem}
                    tags={card.tags}
                    comentarios={card.comentarios}
                    compartilhamentos={card.compartilhamentos}
                />
                )
                : 'loading...'
            }
        </div>
    );
}

export default Cards;