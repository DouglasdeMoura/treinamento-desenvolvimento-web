import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import renderer from 'react-test-renderer';
import { Button } from './Button';

describe('<Button />', () => {
  it('deve renderizar o botão', () => {
    const Component = <Button>Nome</Button>;
    render(Component);
    const botao = screen.getByText('Nome');
    expect(botao).toHaveAttribute('data-primary', 'false');
    
    const tree = renderer
      .create(Component)
      .toJSON();
    
      expect(tree).toMatchSnapshot();
  });

  it('deve renderizar o botão primário', () => {
    render(<Button primary={true}>Nome</Button>);
    const botao = screen.getByText('Nome');
    expect(botao).toHaveAttribute('data-primary', 'true');
  });

  it('deve renderizar o nome do botão', () => {
    render(<Button>Nome</Button>);
    expect(screen.getByText('Nome')).toBeInTheDocument();
  });

  it('deve chamar função de OnClick', () => {
    const handleOnClick = jest.fn();
    render(<Button onClick={handleOnClick}>Nome</Button>);
    userEvent.click(screen.getByText('Nome'));
    expect(handleOnClick).toHaveBeenCalled();
  });
});
