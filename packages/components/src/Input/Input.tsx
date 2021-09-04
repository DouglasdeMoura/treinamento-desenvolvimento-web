import React, { forwardRef } from 'react';
import styled from 'styled-components';

type InputProps = {
  color?: string,
  background?: string,
} & JSX.IntrinsicElements['input'];

const InputComponent = forwardRef<HTMLButtonElement, InputProps>(({
  ...rest
}, ref) => (
  <input {...rest} ref={ref} />
));

export const Input = styled(InputComponent)`
  border: 2px solid var(--color-gray-400);
  border-radius: 4px;
  color: ${props => props.color ?? 'var(--color-gray-600)'};
  cursor: not-allowed;
  background: ${props => props.background ?? 'white'};
  padding: 0.5em 1em;

  :disabled {
    background: var(--color-gray-100);
    border-color: var(--color-gray-300);
    color: var(--color-gray-300);
  }

  &:focus {
    border-color: var(--color-gray-700);
  }
`;
