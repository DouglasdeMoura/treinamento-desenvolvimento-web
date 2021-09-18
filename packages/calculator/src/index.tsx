import React from 'react';
import { render } from 'react-dom';

const Login = () => {
  return (
    <form>
      <fieldset>
        <p>
          <label htmlFor="user">Usuário</label>
          <input id="user" />
        </p>
        
        <p>
          <label htmlFor="password">Senha</label>
          <input id="password" type="password" />
        </p>
      </fieldset>
    </form>
  );
}

render(<Login />, document.getElementById('root'));
