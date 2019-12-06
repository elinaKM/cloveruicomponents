import styled, { css, ThemeProvider } from 'styled-components'
import React from "react";
import {theme} from "../Style/theme";

const StyledButton = styled.button`
    & {
    font-size: ${props => props.fontSize};
    cursor: pointer;
    position: relative;
    margin: 30px;
    height: 100px;
    width: 100px;
    white-space: nowrap;
    align-self: center;
    border-radius: 100%;
    border: none;
    font-weight: bold;
    background-color: ${theme.palette.primary};
    color: ${theme.palette.primaryText};
    box-shadow: 1px 1px 10px ${theme.palette.secondary};
  }
  &:focus {
    outline: none;
  }
  &:active {
    box-shadow: none;
  }
  &:active:before {
    display: none;
  }
  &:before {
    content: "";
    position: absolute;
    border-radius: 100%;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      150deg,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.05)
    );}
`;

function CloverToggleButton({clickHandler, sizeOfFont, children}){
  return(
    <ThemeProvider theme={theme}>
      <StyledButton onClick={clickHandler} fontSize={sizeOfFont}>
        {children}
      </StyledButton>
    </ThemeProvider>
  )
}

export default CloverToggleButton;
