import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

const App = () => {
  const [valorControladoPeloReact, setValor] = useState(0);
  const [comparacao, setComparacao] = useState(true);
  let valorNaoControladoPeloReact = 0;
  
  const handleOnClick = () => {
    setValor(valorControladoPeloReact + 1)
  }
  
  useEffect(() => {
    // O emoji abaixo será exibido quando o componente for carregado
    // ou quando qualquer estado for alterado.
    console.log('👋');
    
    // O emoji abaixo será exibido quando o componente for
    // destruído.
    return () => console.log('💥');
  });
  
  useEffect(() => {
    console.log('🚀')
  }, []);
  // ^------------------
  // Este efeito será executado apenas uma vez, quando o
  // o componente for carregado. É neste efeito, por exemplo,
  // que faríamos uma chamada para uma API.
  
  useEffect(() => {
    // Ao contrário do exemplo anterior, agora nós só atualizamos
    // a variável local depois que a variável controlada pelo React
    // for atualizada...
    valorNaoControladoPeloReact = valorControladoPeloReact;

    // ...e, para que essa comparação seja refletida na UI,
    // colocamos o resultado da comparação em outra
    // variável controlada pelo React.
    setComparacao(valorControladoPeloReact === valorNaoControladoPeloReact);
  }, [valorControladoPeloReact]);
  // ^------------------
  // Este efeito será executado sempre que houver alguma atualização
  // em valorControladoPeloReact.
  
  useEffect(() => {
    console.log('🖊️');
  }, [valorNaoControladoPeloReact]);
  // ^------------------
  // Este efeito será executado quando o componente for renderizado
  // mas não é capaz de acompanhar as mudanças de um variável não
  // controlada pelo React.
  
  return (
    <div>
      <div>
        Valor não controlado pelo React: <strong>{valorNaoControladoPeloReact}</strong>
      </div>
      <div>
        Valor controlado pelo React: <strong>{valorControladoPeloReact}</strong>
      </div>
      <div>
        Os valores são iguais na memória? {` `}
        {
          comparacao ?
            'Sim' : 'Não'
        }
      </div>
      <hr />
      <button onClick={handleOnClick}>+1</button>
    </div>
  )
}

render(<App />, document.getElementById('root'));
