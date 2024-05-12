import React from "react";
import './curriculo.css'; // Importando o arquivo CSS diretamente
import data from "../Curriculo/Curriculo.json";

function Curriculo() {
  return (
    <>
      <section>
        <h2>Resumo</h2>
        <p>{data.resume}</p>
      </section>

      <section>
        <h2>Acadêmico</h2>
        <ul>
          {data.experienciaAcademica.map((experiencia, index) => (
            <li key={index}>
              <b>({experiencia.data}) - {experiencia.titulo}</b>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Profissional</h2>
        <ul>
          {data.experienciaProfissional.map((experiencia, index) => (
            <li key={index}>
              <b>({experiencia.dataInicial} - {experiencia.dataFinal}) - {experiencia.titulo}</b>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Curriculo;
