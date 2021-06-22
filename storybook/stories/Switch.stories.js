import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {VStack, Switch} from 'native-base';

storiesOf('Switch', module).add('Switch', () => (
  <VStack space={4} alignItems="center">
    <Switch size="sm" />
    <Switch size="md" />
    <Switch size="lg" />
  </VStack>
));
