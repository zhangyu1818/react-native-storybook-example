import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Stack, Alert} from 'native-base';

storiesOf('Alert', module).add('Alert', () => (
  <Stack space={3}>
    {['error', 'warning', 'info', 'success'].map(key => {
      return (
        <Alert status={key}>
          <Alert.Icon />
          <Alert.Title>{`This is an ${key} alert`}</Alert.Title>
        </Alert>
      );
    })}
  </Stack>
));
