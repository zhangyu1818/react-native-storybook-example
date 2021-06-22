import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Radio} from 'native-base';

storiesOf('Radio', module).add('Radio', () => (
  <Radio.Group defaultValue="1" name="myRadioGroup">
    <Radio value="1" my={1}>
      First
    </Radio>
    <Radio value="2" my={1}>
      Second
    </Radio>
    <Radio value="3" my={1}>
      Third
    </Radio>
    <Radio value="4" my={1} isDisabled>
      Disabled
    </Radio>
  </Radio.Group>
));
