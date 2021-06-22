import React from 'react';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import {NativeBaseProvider} from 'native-base';

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone6',
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  Story => (
    <NativeBaseProvider>
      <Story />
    </NativeBaseProvider>
  ),
];
