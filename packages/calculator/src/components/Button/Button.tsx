import React, { forwardRef } from 'react';
import styled from 'styled-components';
import type { FC, MouseEvent, ReactNode } from 'react';

export type ButtonProps = {
  children: ReactNode,
  primary: boolean,
  backgroundColor: string,
  onClick(event?: MouseEvent<HTMLButtonElement>): void,
  size: 'small' | 'medium' | 'large',
};

const StyledButton = styled.button<Pick<ButtonProps, 'backgroundColor' | 'primary'>>`
  background: ${({ backgroundColor, primary }) =>
    backgroundColor ? backgroundColor : (primary  ? 'rebeccapurple' : '#f6f6f6')
  };
  border: none;
  border-radius: 50em;
  color: ${({ primary }) => primary ? 'white' : '#333'};
  font-weight: bold;

  &[data-size="small"] {
    font-size: 0.8rem;
    padding: 0.3rem 0.8rem;
  }

  &[data-size="medium"] {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }

  &[data-size="large"] {
    font-size: 1.2rem;
    padding: 0.7rem 1.4rem;
  }
`;

export const Button = forwardRef<HTMLButtonElement, FC<ButtonProps>>(({
  backgroundColor,
  children,
  onClick,
  primary = false,
  size = 'medium',
}, ref) => (
  <StyledButton
    data-size={size}
    backgroundColor={backgroundColor}
    primary={primary}
    onClick={onClick}
    ref={ref}
  >
    {children}
  </StyledButton>
));
