import React, { FC } from "react";
import { ButtonCalcContainer } from "./styles";
import { ButtonHTMLAttributes } from "react";

export interface ButtonCalcProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  background: string;
  color: string;
  label: string;
}

const ButtonCalc: FC<ButtonCalcProps> = ({
  onClick,
  label,
  background,
  color,
}) => {
  return (
    <ButtonCalcContainer
      onClick={onClick}
      background={background}
      color={color}
    >
      <span>{label}</span>
    </ButtonCalcContainer>
  );
};

export default ButtonCalc;
