import React from 'react';
import { Button } from './Button';

import type { Meta, Story } from '@storybook/react';
import type { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: 'Teste',
  primary: false,
  size: 'large',
};
