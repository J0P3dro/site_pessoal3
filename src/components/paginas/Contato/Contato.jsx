import React, { useState } from 'react';
import './Contato.css';

function Contato() {
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [mensagem, setMensagem] = useState("");

    function enviarFormulario(event) {
        event.preventDefault();
        const mensagemWhatsapp = `Nome: ${nome}%0ATelefone: ${telefone}%0AEmail: ${email}%0AMensagem: ${mensagem}`;
        const numeroWhatsApp = import.meta.env.VITE_WHATSAPP_NUMBER;
        const linkWhatsapp = `https://api.whatsapp.com/send?phone=5585997272238&text=${mensagemWhatsapp}`;
        window.open(linkWhatsapp);
    }

    return (
        <>
            <form onSubmit={enviarFormulario}>
                <fieldset>
                    <label htmlFor="input-nome">Nome</label>
                    <input
                        type="text"
                        name="input-nome"
                        id="input-nome"
                        required
                        minLength="2"
                        value={nome}
                        onChange={(event) => setNome(event.target.value)}
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="input-tel">Telefone</label>
                    <input
                        type="tel"
                        name="input-tel"
                        id="input-tel"
                        placeholder="(99) 99999-9999"
                        required
                        pattern="^\(\d{2}\) \d{5}-\d{4}$"
                        maxLength="15"
                        value={telefone}
                        onChange={(event) => setTelefone(event.target.value)}
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="input-email">E-mail</label>
                    <input
                        type="email"
                        name="input-email"
                        id="input-email"
                        required
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="input-mensagem">Mensagem</label>
                    <textarea
                        name="input-mensagem"
                        id="input-mensagem"
                        cols="30"
                        rows="10"
                        value={mensagem}
                        onChange={(event) => setMensagem(event.target.value)}
                    ></textarea>
                </fieldset>
                <center><input type="submit" value="ENVIAR" className="button" /></center>
            </form>
        </>
    );
}

export default Contato;
