import React, { useState } from 'react';
import "./Tags.css";

const Tags = () => {
    const [tags, setTags] = useState(['Front-end', 'React', 'Acessibilidade']);

    const limparTags = () => {
        setTags([]);
    }

    return(
        <div className='div-tags'>
            <ul className='tags'>
                {tags.map(tag => <li key={tag} className='tag'>{tag}</li>)}
            </ul>
            <a href='#' className='botao-limpar' onClick={limparTags}>Limpar Tudo</a>
        </div>
    );
}

export default Tags;