import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {
  Actionsheet,
  Button,
  useDisclose,
  VStack,
  HStack,
  Box,
  Center,
} from 'native-base';

storiesOf('Actionsheet', module).add('Actionsheet', () => {
  const {isOpen, onOpen, onClose} = useDisclose();
  return (
    <Center height={500}>
      <Button onPress={onOpen}>Actionsheet</Button>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <VStack space={2} width="100%">
            <HStack width="100%" justifyContent="space-around">
              <Box>😁</Box>
              <Box>😍</Box>
              <Box>😎</Box>
            </HStack>
            <VStack justifyContent="flex-start" width="100%" space={2}>
              <Actionsheet.Item>Reply</Actionsheet.Item>
              <Actionsheet.Item>Copy Text</Actionsheet.Item>
              <Actionsheet.Item>Profile</Actionsheet.Item>
              <Actionsheet.Item>Mark Read</Actionsheet.Item>
            </VStack>
          </VStack>
        </Actionsheet.Content>
      </Actionsheet>
    </Center>
  );
});
