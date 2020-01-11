import React from 'react';
import { action } from '@storybook/addon-actions';
import LabeledTextField from '../src/LabeledTextField';

export default {
  title: 'LabeledTextField',
  component: LabeledTextField,
};

export const UserNameTextField = () =>
    <LabeledTextField 
        label="User Name"
        type="text"
        id="username"
        placeholder="Please insert User Name..."
        onChange={action('Char typed')}
        fontSize="1.3em"
    />;

export const PasswordTextField = () =>
    <LabeledTextField
    label="Password"
    type="password"
    id="password"
    placeholder="Please insert password..."
    onChange={action('Char typed')}
    fontSize="1em"
    />;