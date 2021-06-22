import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {VStack, Badge} from 'native-base';

storiesOf('Badge', module).add('Badge', () => (
  <VStack space={2}>
    <Badge colorScheme="success">SUCCESS</Badge>
    <Badge colorScheme="danger">DANGER</Badge>
    <Badge colorScheme="info">INFO</Badge>
    <Badge colorScheme="dark">DARK</Badge>
  </VStack>
));
