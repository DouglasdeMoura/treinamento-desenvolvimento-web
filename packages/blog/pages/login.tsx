import type { NextPage } from 'next'
import { Button, Input } from 'components';
import { useState, useEffect, FormEvent } from 'react';
import styled from 'styled-components';

type Credentials = {
  username: string,
  password: string,
};

function useLogin(credentials: Credentials | undefined) {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<Response>();
  const [error, setError] = useState<Response>();

  useEffect(() => {
    if (loading) {
      fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(credentials),
      })
        .then(res => {
          if (res.ok) {
            setResponse(res);
          } else {
            setError(res);
          }
        })
        .catch(err => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }

  }, [loading, credentials]);

  useEffect(() => {
    if (credentials !== undefined) {
      setLoading(true);
    }
  }, [credentials]);

  return { loading, response, error };
};

const Form = styled.form`
  max-width: 320px;
  margin: 0 auto;

  fieldset {
    border-radius: 5px;
    padding: 0 1em;
  }

  label {
    display: block;
    font-weight: bold;
    font-size: small;
    margin-bottom: 0.5em;
  }

  input {
    width: 100%;
    box-sizing: border-box;
  }
`;

const Login: NextPage = () => {
  const [credentials, setCredentials] = useState<Credentials>();
  const { loading, error } = useLogin(credentials);

  const handleOnSubmit = (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    setCredentials(Object.fromEntries(formData.entries()) as Credentials);
  }

  return (
    <Form onSubmit={handleOnSubmit}>
      <fieldset>
        <p>
          <label>Usuário</label>
          <Input name="username" />
        </p>
        <p>
          <label>Senha</label>
          <Input type="password" name="password" />
        </p>
        <p>
          <Button disabled={loading} type="submit" primary={true}>Entrar</Button>
        </p>
        {error && <p>Ocorreu um erro ao tentar logar na plataforma.</p>}
      </fieldset>
    </Form>
  )
}

export default Login
