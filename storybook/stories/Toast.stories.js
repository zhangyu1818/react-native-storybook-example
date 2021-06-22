import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Button, Center, useToast} from 'native-base';

storiesOf('Toast', module).add('Toast', () => {
  const toast = useToast();

  return (
    <Center height={500}>
      <Button
        onPress={() =>
          toast.show({
            title: 'Hello world',
          })
        }>
        Show Toast
      </Button>
    </Center>
  );
});
