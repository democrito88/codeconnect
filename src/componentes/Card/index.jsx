import React from 'react';
import "./Card.css";
import Autor from './Autor';
import IconeTexto from "../IconeTexto";

const Card = ({imagem, titulo, texto, tags, compartilhamentos, comentarios}) => {
    return (
        <div className='card'>
            <img className='img-card-top' src={imagem}/>
            <div className="card-body">
                <h4>{titulo}</h4>
                <p>{texto}</p>
                <div className='card-body-footer'>
                    <div className='card-icons'>
                        <IconeTexto tamanho='s' icone='tag' texto={tags} />
                        <IconeTexto tamanho='s' icone='share' texto={compartilhamentos} />
                        <IconeTexto tamanho='s' icone='comments' texto={comentarios} />
                    </div>
                    <Autor avatar={'https://github.com/democrito88.png'} login={'@julio'} />
                </div>
            </div>
        </div>
    );
}

export default Card;