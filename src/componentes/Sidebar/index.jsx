import React from 'react'
import "./Sidebar.css";
import Button from '../Button';
import IconeTexto from '../IconeTexto';
import Logo from "./../../assets/Logo/Logo_Large.svg"

const Sidebar = () => {
    return (
        <aside className='sidebar'>
            <img src={Logo} alt="logo do code connect" />
            <Button>Publicar</Button>
            <nav>
                <ul>
                    <li>
                        <IconeTexto tamanho='l' icone='feed' texto='Feed' destaque={true} pagina='/feed' />
                    </li>
                    <li>
                        <IconeTexto tamanho='l' icone='perfil' texto='Perfil' destaque={false} />
                    </li>
                    <li>
                        <IconeTexto tamanho='l' icone='sobre' texto='Sobre nós' destaque={false} />
                    </li>
                    <li>
                        <IconeTexto tamanho='l' icone='sair' texto='Sair' destaque={false} />
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;

