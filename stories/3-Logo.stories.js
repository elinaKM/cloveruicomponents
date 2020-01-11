import React from 'react';
import styled from 'styled-components';
import Logo from '../src/Logo';
import {theme as defaultTheme} from '../src/Style/theme';
import PeachTheme from '../src/Style/PeachTheme';

export default {
  title: 'Logo',
  component: Logo,
};

const StyledDiv = styled.div`
  background-color: ${props => props.theme.palette.primary};
`;

const cloverIcon = (
  <span role="img" aria-label="clover-icon">
    🍀
  </span>
);

export const SimpleCloverLogo = () =>
<StyledDiv theme={defaultTheme}>
  <Logo text="CLOVER" icon={cloverIcon} iconAriaLabel="clover-icon" fontSize="30px" spaceSize="5px" theme={defaultTheme}/>
</StyledDiv>
;

const freezIcon = (
  <span role="img" aria-label="freezer">
    🥶
  </span>
);

const blueTheme = {
  palette: {
    primary :"#3f678a",
    primaryText: "#bfdaf2",
  }
};

export const FreezLogo = () => 
<StyledDiv theme={blueTheme}>
  <Logo text="Freez" icon={freezIcon} iconAriaLabel="freez" fontSize="2em" spaceSize="5px" theme={blueTheme}/>
</StyledDiv>


const peachIcon = (
  <span role="img" aria-label="peach">
    🍑
  </span>
);

export const PeachLogo = () => 
<StyledDiv theme={PeachTheme}>
  <Logo text="PEACH" icon={peachIcon} iconAriaLabel="peach" fontSize="2em" spaceSize="5px" theme={PeachTheme}/>
</StyledDiv>