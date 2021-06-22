import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Popover, Button} from 'native-base';

storiesOf('Popover', module).add('Popover', () => (
  <Popover
    trigger={triggerProps => {
      return <Button {...triggerProps}>Trigger</Button>;
    }}>
    <Popover.Content accessibilityLabel="hello world" borderRadius={'xl'}>
      <Popover.Arrow />
      <Popover.CloseButton />
      <Popover.Header>Confirmation</Popover.Header>
      <Popover.Body>
        Are you sure you want to continue with your action?
      </Popover.Body>
      <Popover.Footer justifyContent="flex-end">
        <Button.Group>
          <Button size="sm" variant="ghost">
            Cancel
          </Button>
          <Button size="sm">Apply</Button>
        </Button.Group>
      </Popover.Footer>
    </Popover.Content>
  </Popover>
));
