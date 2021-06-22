import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Slider, VStack} from 'native-base';

storiesOf('Slider', module).add('Slider', () => (
  <VStack space={4}>
    <Slider defaultValue={80} colorScheme="green" size="sm">
      <Slider.Track>
        <Slider.FilledTrack />
      </Slider.Track>
      <Slider.Thumb />
    </Slider>
    <Slider defaultValue={60} size="md">
      <Slider.Track>
        <Slider.FilledTrack />
      </Slider.Track>
      <Slider.Thumb />
    </Slider>
    <Slider defaultValue={40} colorScheme="red" size="lg">
      <Slider.Track>
        <Slider.FilledTrack />
      </Slider.Track>
      <Slider.Thumb />
    </Slider>
  </VStack>
));
