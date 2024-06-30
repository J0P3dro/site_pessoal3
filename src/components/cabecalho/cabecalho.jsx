import React from "react";
import jpAvatar from '../../assets/jp-avatar.jpg';
import './cabecalho.css';

import api from "../../assets/api";

function Cabecalho(props) {

    const {nome, cargo, foto} = props.informacoes;

    return (
        <header>
            <div>
                <img src={foto} alt="Foto de João Pedro Aragão Galhardo" />
                <h1 id="nome-perefil">{nome}</h1>
                <h3 id="eventoSubtitulo">{cargo}</h3>
               
                </div></header>
                 )


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
}

export default Cabecalho;
