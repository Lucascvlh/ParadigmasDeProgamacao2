import React from 'react';
import ReactDom from 'react-dom';

import Jogo from './componentes/Jogo'
import Estadio from './componentes/Estadio'
import Saudacoes from './componentes/Saudacoes';
import Produto from './classes/Produto';

ReactDom.render(
  <>
    <Jogo timeA="Franca Basquete" timeB="Flamengo"/>
    <Estadio nome="Pedrocão"/>
    <Saudacoes.bomDia timeA="Franca Basquete"/>
    <Saudacoes.boaTarde timeB="Flamengo"/>
    <Saudacoes.boaNoite nome="Pedrocão"/>
    <Produto/>
  </>
  , document.getElementById('root'))