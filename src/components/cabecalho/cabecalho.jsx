import React from "react";
import jpAvatar from '../../assets/jp-avatar.jpg';
import './cabecalho.css';

function Cabecalho() {
    return (
        <header>
            <div>
                <img src={jpAvatar} alt="Foto de João Pedro Aragão Galhardo" />
                <h1>João Pedro Aragão Galhardo</h1>
                <h3>Desenvolvedor de Software</h3>
            </div>
        </header>
    );
}

export default Cabecalho;
