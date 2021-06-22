import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Button, VStack} from 'native-base';

storiesOf('Button', module).add('Button', () => (
  <VStack space={4}>
    {['xs', 'sm', 'md', 'lg'].map(size => (
      <Button key={size} size={size}>
        Button
      </Button>
    ))}
    <Button isLoading>Loading</Button>
    <Button isDisabled>Disabled</Button>
  </VStack>
));
