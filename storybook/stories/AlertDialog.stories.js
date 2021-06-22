import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {AlertDialog, Button, Center} from 'native-base';

storiesOf('AlertDialog', module).add('AlertDialog', () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();
  return (
    <Center height={500}>
      <AlertDialog
        motionPreset="fade"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Discard Changes?</AlertDialog.Header>
          <AlertDialog.Body>
            Are you sure you want to discard all of your notes? 44 words will be
            deleted.
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button ref={cancelRef} onPress={onClose}>
              No
            </Button>
            <Button colorScheme="red" ml={3}>
              Yes
            </Button>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
      <Button onPress={() => setIsOpen(!isOpen)}>Discard</Button>
    </Center>
  );
});
