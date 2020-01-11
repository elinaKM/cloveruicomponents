import React from 'react';
import { action } from '@storybook/addon-actions';
import ToggleButton from '../src/ToggleButton';
import PeachTheme from '../src/Style/PeachTheme';
import FreezTheme from '../src/Style/FreezTheme';

export default {
  title: 'ToggleButton',
  component: ToggleButton,
};

export const Button = () => <ToggleButton onClick={action('clicked')}>Roll!</ToggleButton>;

export const ButtonWithBigFont = () => <ToggleButton fontSize="35px" onClick={action('clicked')}>Roll!</ToggleButton>;

export const PinkButton = () => <ToggleButton fontSize="30px" theme={PeachTheme} onClick={action('clicked')}>Roll!</ToggleButton>;

export const FreezButton = () => <ToggleButton fontSize="30px" theme={FreezTheme} onClick={action('clicked')}>Roll!</ToggleButton>;