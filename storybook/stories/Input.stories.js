import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Input, VStack} from 'native-base';

storiesOf('Input', module).add('Input', () => (
  <VStack space={4}>
    <Input size="xs" placeholder="xs Input" />
    <Input size="sm" placeholder="sm Input" />
    <Input size="md" placeholder="md Input" />
    <Input size="lg" placeholder="lg Input" />
    <Input size="xl" placeholder="xl Input" />
    <Input size="2xl" placeholder="2xl Input" />
    <Input variant="outline" placeholder="Outline" />
    <Input variant="filled" placeholder="Filled" />
    <Input variant="underlined" placeholder="Underlined" />
    <Input variant="unstyled" placeholder="Unstyled" />
    <Input variant="rounded" placeholder="Round" />
  </VStack>
));
