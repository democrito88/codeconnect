import React from 'react';
import "./Comentario.css";

const Comentario = ({author, text, avatar, hr}) => {
    return(
        <div className='container-comentario'>
            <div className='comentario'>
                <img className='comentario-avatar' src={avatar} />
                <h5>{author}</h5>
                <p>{text}</p>
            </div>
            <div>
                <a className='botao-responder'>
                    <h5>Responder</h5>
                </a>
            </div>
            {hr && <hr />}
        </div>
    );
}

export default Comentario;