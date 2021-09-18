import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../pages/login'

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