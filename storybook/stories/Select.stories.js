import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Select, CheckIcon} from 'native-base';

storiesOf('Select', module).add('Select', () => (
  <Select
    accessibilityLabel="Select your favorite programming language"
    placeholder="Select your favorite programming language"
    _selectedItem={{
      bg: 'cyan.600',
      endIcon: <CheckIcon size={4} />,
    }}>
    <Select.Item label="JavaScript" value="js" />
    <Select.Item label="TypeScript" value="ts" />
    <Select.Item label="C" value="c" />
    <Select.Item label="Python" value="py" />
    <Select.Item label="Java" value="java" />
  </Select>
));
