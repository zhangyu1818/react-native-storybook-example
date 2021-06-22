import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Menu, Divider, HamburgerIcon, IconButton, Center} from 'native-base';

storiesOf('Menu', module).add('Menu', () => (
  <Center>
    <Menu
      trigger={triggerProps => {
        return <IconButton {...triggerProps} icon={<HamburgerIcon />} />;
      }}>
      <Menu.Item>Aria</Menu.Item>
      <Menu.Item>Nunito Sans</Menu.Item>
      <Menu.Item isDisabled>Tahoma</Menu.Item>
      <Divider />
      <Menu.Item>Roboto</Menu.Item>
      <Menu.Item>Montserrat</Menu.Item>
    </Menu>
  </Center>
));
