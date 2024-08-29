import React from 'react';
import "./IconeTexto.css";
import { PiBracketsAngleBold } from "react-icons/pi";
import { MdShare, MdOutlineInsertComment, MdOutlineFeed, MdInfo, MdImage } from "react-icons/md";
import { IoPersonCircle } from "react-icons/io5";
import { RxExit } from "react-icons/rx";

const IconeTexto = ({ tamanho = '', icone = '', texto = '', destaque = false, pagina = '/' }) => {
    const renderIcon = () => {
        switch (icone) {
            case 'tag':
                return <PiBracketsAngleBold />;
            case 'share':
                return <MdShare />;
            case 'comments':
                return <MdOutlineInsertComment />;
            case 'feed':
                return <MdOutlineFeed />;
            case 'perfil':
                return <IoPersonCircle />;
            case 'sobre':
                return <MdInfo />;
            case 'sair':
                return <RxExit />;
            default:
                return <MdImage />;
        }
    };

    return (
        <div className={`icone-texto`}>
            <a href={pagina}>
                <div className={tamanho == 's' ? 'icone-pequeno' : 'icone-grande'}>
                    {renderIcon()}
                </div>
                <p>{texto}</p>
            </a>
        </div>
    );
}

export default IconeTexto;