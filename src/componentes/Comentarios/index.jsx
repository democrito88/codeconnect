import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import json from "../../assets/json/comments.json";
import Comentario from '../Comentario';
import "./Comentarios.css";

const Comentarios = ({id}) => {
    const [comentarios, setComentarios] = useState([]);

    useEffect(() => {
        setComentarios(json.filter(comment => comment.post_id == id));
    }, [id]);
    
    return(
        <div className="comentarios-container">    
            <h3>Comentários</h3>
            <div className='comentarios'>
                {comentarios.map((comentario, index) => 
                    <Comentario
                        key={index} 
                        id={comentario.id}
                        author={comentario.author}
                        text={comentario.text}
                        avatar={comentario.avatar}
                        hr={index < (comentarios.length - 1)}
                    />
                )}
            </div>
        </div>
    );
}

export default Comentarios;