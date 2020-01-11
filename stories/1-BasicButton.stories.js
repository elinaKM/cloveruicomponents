import React from 'react';
import { action } from '@storybook/addon-actions';
import BasicButton from '../src/BasicButton';
import PeachTheme from '../src/Style/PeachTheme';
import FreezTheme from '../src/Style/FreezTheme';

export default {
  title: 'BasicButton',
  component: BasicButton,
};

export const NormalButton = () => <BasicButton onClick={action('clicked')}>Play!</BasicButton>;

export const LargeButton = () => <BasicButton size="large" onClick={action('clicked')}>Play!</BasicButton>;

export const PeachButton = () => <BasicButton onClick={action('clicked')} theme={PeachTheme}>Play now!</BasicButton>;

export const FreezButton = () => <BasicButton onClick={action('clicked')} theme={FreezTheme}>Play now!</BasicButton>;
