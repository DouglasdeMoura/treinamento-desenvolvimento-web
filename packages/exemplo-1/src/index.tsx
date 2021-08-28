import React from 'react';
import { render } from 'react-dom';

function Saudacao({ nome = 'mundo' }) {
  return <p>Olá, {nome}</p>;
}

render(<Saudacao nome="Douglas" />, document.getElementById('root'))
