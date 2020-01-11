import React from 'react';
import { action } from '@storybook/addon-actions';
import Loading from '../src/Loading';
import styled from 'styled-components';
import PeachTheme from '../src/Style/PeachTheme';
import FreezTheme from '../src/Style/FreezTheme';

export default {
  title: 'Loading',
  component: Loading,
};

const StyledDiv = styled.div`
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items center;
`;
export const CloverLoadingBars = () => 
  <StyledDiv>
    <Loading/>
  </StyledDiv>;

export const PeachLoadingBars = () =>
  <StyledDiv>
    <Loading theme={PeachTheme}/> 
  </StyledDiv>;

export const FreezLoadingBars = () => 
  <StyledDiv>
    <Loading theme={FreezTheme}/>
  </StyledDiv>;