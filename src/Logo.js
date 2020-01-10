import React from 'react'
import styled from 'styled-components'
import {theme as defaultTheme} from './Style/theme'

const StyledLogo = styled.span`
  font-size: 2em;
  color: ${props => props.theme.palette.primaryText};
  text-decoration: none;
`;

function Logo({theme}){
    const useTheme = (theme ? theme : defaultTheme);
    return (
        <StyledLogo theme={useTheme}>{`${useTheme.id.logo} ${useTheme.id.name}`}</StyledLogo>
    );
}

export default Logo;