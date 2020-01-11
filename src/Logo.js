import React from 'react'
import styled from 'styled-components'
import {theme as defaultTheme} from './Style/theme'

function Logo( {text, icon, iconAriaLabel, fontSize, spaceSize, theme}){
    return (
        <StyledDiv fontSize={fontSize}
                   theme={theme ? theme : defaultTheme}>
          <StyledSpan
            role="img"
            aria-label={iconAriaLabel}
            spaceSize={spaceSize}
          >
            {icon}
          </StyledSpan>
          <span>{text}</span>
        </StyledDiv>
    );
}

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.palette.primaryText};
  font-size: ${props => props.fontSize};
`;

const StyledSpan = styled.span`
  margin-right: ${props => props.spaceSize};
`;

export default Logo;