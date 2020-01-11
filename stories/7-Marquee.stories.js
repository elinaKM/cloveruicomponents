import React from 'react';
import { action } from '@storybook/addon-actions';
import Marquee from '../src/Marquee';
import styled from 'styled-components';
import PeachTheme from '../src/Style/PeachTheme';
import FreezTheme from '../src/Style/FreezTheme';

export default {
  title: 'Marquee',
  component: Marquee,
};

const StyledDiv = styled.div`
    width: 600px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items center;
    margin-left: 50px;
`;

export const CloverMarquee = () =>
    <StyledDiv>
        <Marquee fontSize="20px">Come and play in our Clover Casino!</Marquee>
    </StyledDiv>
;

export const FreezMarquee = () =>
    <StyledDiv>
        <Marquee theme={FreezTheme} fontSize="60px">Let it Go, Let it Go!</Marquee>
    </StyledDiv>
;

export const PeachMarquee = () =>
    <StyledDiv>
        <Marquee theme={PeachTheme} fontSize="20px">I am beautiful, no matter what you say!</Marquee>
    </StyledDiv>
;