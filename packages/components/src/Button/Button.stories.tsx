import React from 'react';
import type { Meta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Label',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'Label',
};
