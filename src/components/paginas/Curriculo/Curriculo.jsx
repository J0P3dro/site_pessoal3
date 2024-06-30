import React from "react";
import './curriculo.css'; // Importando o arquivo CSS diretamente
import data from "../Curriculo/Curriculo.json";

function Curriculo(props) {
  const {resumo, experienciaAcademica, experienciaProfissional } = props;

  if (!resumo || !elsenciaAcademica || !experienciaProfissional){
    return <p>Carregando...</p>;
  }

  return (
    <>
      <section>
        <h2>Resumo</h2>
        <p>{resumo}</p>
      </section>

      <section>
        <h2>Acadêmico</h2>
        <ul>
          {experienciaAcademica.map((item, index) => (
            <li key={index}>
              <b>({item.anoInicio} - {item.anoFinal}) - {item.titulo}</b>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Profissional</h2>
        <ul>
          {experienciaProfissional.map((item, index) => (
            <li key={index}>
              <b>({item.anoInicial} - {item.anoFinal}) - {item.titulo}</b>
            </li>
          ))}
        </ul>
      </section>
    </>
  );

}




export default Curriculo;
