import React from 'react'
import styled from 'styled-components'
import {theme as defaultTheme} from './Style/theme'

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
    background-color: ${props => props.theme.palette.primary};
    color: ${props => props.theme.palette.primaryText};
    box-shadow: 1px 1px 10px ${props => props.theme.palette.secondary};
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
    );
  }
`;

function ToggleButton({ onClick, fontSize, children, theme }) {
  return (
    <StyledButton onClick={onClick} fontSize={fontSize} theme={theme ? theme : defaultTheme}>
      {children}
    </StyledButton>
  )
}

export default ToggleButton;