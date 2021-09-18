import React from 'react';
import type { Meta } from '@storybook/react';

import { Input } from './Input';

export default {
  title: 'Input',
  component: Input,
} as Meta;

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  value: 'Input value',
};