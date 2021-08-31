import React from "react";
import ButtonCalc from "./ButtonCalc";

import type { Meta, Story } from "@storybook/react";
import type { ButtonCalcProps } from "./ButtonCalc";

export default {
  title: "Components/Button",
  component: ButtonCalc,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<ButtonCalcProps> = (args) => <ButtonCalc {...args} />;

export const Common = Template.bind({});
Common.args = {
  children: "Teste",
  primary: false,
  size: "large",
};
