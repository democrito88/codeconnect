import React from 'react';
import "./Autor.css";

const Autor = (props) => {
    return(
        <div className="autor">
            <img className='avatar' src={props.avatar}/>
            <p className='login' >{props.login}</p>
        </div>
    );
}

export default Autor;