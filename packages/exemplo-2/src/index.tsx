import React, { useState } from 'react';
import { render } from 'react-dom';

type ContadorProps = {
  iniciaEm?: number,
};

function Contador({ iniciaEm = 0 }: ContadorProps) {
  const [contador, setContador] = useState(iniciaEm);

  const handleOnClick = () => {
    setContador(contador + 1);
  }

  return (
    <>
      <p>Contador no estado: {contador}</p>
      <button onClick={handleOnClick}>Incrementa</button>
    </>
  );
}

render(<Contador />, document.getElementById('root'))
