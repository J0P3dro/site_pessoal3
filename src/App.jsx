import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import jpAvatar from './assets/jp-avatar.jpg';

import Cabecalho from './components/cabecalho/cabecalho';
import Rodape from './components/rodape/rodape';

import Curriculo from './components/paginas/Curriculo/Curriculo';
import Portifolio from './components/paginas/Portifolio/Portifolio';
import Contato from './components/paginas/Contato/Contato';

import BarraNavegacao from './components/barraNavegacao/barraNavegacao';

function App() {
  return ( 
    <BrowserRouter>
      <Fragment>
        <Cabecalho />
       <BarraNavegacao></BarraNavegacao>
        <Routes>
          <Route path="/" element={<Curriculo />} />
          <Route path="/portifolio" element={<Portifolio />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Rodape />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
