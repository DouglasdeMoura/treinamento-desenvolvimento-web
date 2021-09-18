import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import Login from '../pages/login'
import { act } from 'react-dom/test-utils'

interface LoginBody {
  username: string,
  password: string,
}

interface LoginResponse {
  message: string,
}

const server = setupServer(
  rest.post<LoginBody, LoginResponse>('/api/login', (req, res, ctx) => {
    const { username, password } = req.body
    return res(
      ctx.json({
        message: 'Sucesso',
      })
    )
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('Página de login', () => {
  it('deve renderizar a página', () => {
    render(<Login />);
  });

  it('deve fazer o login do usuário', () => {
    render(<Login />);

    userEvent.type(screen.getByLabelText('Usuário'), 'mock_user');
    userEvent.type(screen.getByLabelText('Senha'), 'mock_password');
    userEvent.click(screen.getByText('Entrar'));   
  });
});