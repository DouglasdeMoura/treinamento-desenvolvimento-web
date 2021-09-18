import React, { forwardRef } from 'react';
import styled from 'styled-components';

type ButtonProps = {
  color?: string,
  background?: string,
  primary?: boolean,
} & JSX.IntrinsicElements['button'];

const ButtonComponent = forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  type = 'button',
  primary = false,
  ...rest
}, ref) => (
  <button type={type} data-primary={primary} {...rest} ref={ref}>
    {children}
  </button>
));

export const Button = styled(ButtonComponent)`
  border: 2px solid currentColor;
  border-radius: 4px;
  color: ${props => props.color ?? 'var(--color-red-500)'};
  cursor: pointer;
  background: ${props => props.background ?? 'white'};
  font-weight: bold;
  padding: 0.5em 1em;
  transition: filter 0.2s;

  :disabled {
    cursor: not-allowed;
    color: var(--color-gray-300);
  }

  &:focus {
    filter: brightness(120%);
  }

  &:not(:disabled):hover {
    filter: drop-shadow(0 0 0.75rem currentColor);
  }
`;
