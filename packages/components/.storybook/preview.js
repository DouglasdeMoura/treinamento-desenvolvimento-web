import React from 'react';

import { Theme } from '../src/Theme/Theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <Theme>
      <Story />
    </Theme>
  ),
];
