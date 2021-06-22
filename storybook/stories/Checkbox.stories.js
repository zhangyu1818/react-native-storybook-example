import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {VStack, Checkbox} from 'native-base';

storiesOf('Checkbox', module).add('Checkbox', () => (
  <VStack space={6}>
    <Checkbox value="one">Checkbox</Checkbox>
    <Checkbox value="two" defaultIsChecked>
      Default Checked
    </Checkbox>
    <Checkbox isDisabled value="three">
      Disabled
    </Checkbox>
    <Checkbox isDisabled defaultIsChecked value="four">
      Checked Disabled
    </Checkbox>
  </VStack>
));
