import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import api from './assets/api';

import './App.css';

import jpAvatar from './assets/jp-avatar.jpg';

import Cabecalho from './components/cabecalho/cabecalho';
import Rodape from './components/rodape/rodape';

import Curriculo from './components/paginas/Curriculo/Curriculo';
import Portifolio from './components/paginas/Portifolio/Portifolio';
import Contato from './components/paginas/Contato/Contato';

import BarraNavegacao from './components/barraNavegacao/barraNavegacao';



function App() {

  const [informacoes, setInformacoes] = React.useState({});
  const [curriculo, setCurriculo] = React.useState({});
  const {portifolio, setPortifolio} = React.useState({});

  const fecthDados = async () => {
   try {
    const informacao = await api.get(`/informacao/1`);
    setInformacoes({
      foto: informacao.data.foto,
      nome: informacao.data.nome,
      cargo: informacao.data.cargo
    })

    const experienciaAcademica =await api.get(`experiencias?tipo=academica`);
    const experienciaProfissional = await api.get(`experiencias?tipo=profission`);

    setCurriculo ({
      resume: informacao.data.resume,
      experienciaAcademica: experienciaAcademica.data,
      experienciaProfissional: experienciaProfissional.data,
    });

    const portifolio = await api.get(`portifolio`);
    setPortifolio(portifolio.data);
    
   } catch (error) {
    console.log(error);
    alert('Ocorreu um erro, tente novamente mais tarde');
   }
  };

  React.useEffect(() => {
    fecthDados();
  }, []);
  return ( 
    <BrowserRouter>
      <Fragment>
        <Cabecalho informacoes={informacoes} ></Cabecalho>
       <BarraNavegacao></BarraNavegacao>
        <Routes>
          <Route index element={<Curriculo curriculo={curriculo}/>} />
          <Route path="/portifolio" element={<Portifolio portifolio={portifolio}/>} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Rodape />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
