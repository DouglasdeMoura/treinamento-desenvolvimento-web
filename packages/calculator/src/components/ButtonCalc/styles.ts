import styled from "styled-components";

interface ButtonCalcContainerProps {
  background: string;
  color: string;
}

export const ButtonCalcContainer = styled.button<ButtonCalcContainerProps>`
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  width: 50px;
  height: 50px;
  border: 0;
  border-radius: 8px;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.7;
  }
`;
