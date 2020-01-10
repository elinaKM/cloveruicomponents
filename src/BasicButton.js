import React from 'react'
import styled from 'styled-components'
import {theme as defaultTheme} from './Style/theme'

const StyledButton = styled.button`
  padding: ${props => props.size === "normal" ? "20px" : (props.size === "large" ? "50px" : "20px")};
  font-size: ${props => props.size === "normal" ? "2em" : (props.size === "large" ? "6em" : "2em")};
  align-self: ${props => props.size === "normal" ? "stretch" : (props.size === "large" ? "none" : "stretch")};
  margin-top: 10px;
  border-radius: 10px;
  font-weight: bold;
  background-color: ${props => props.theme.palette.primary};
  color: ${props => props.theme.palette.primaryText};
  text-decoration: none;
  border: none;
  min-width: ${props => props.size === "normal" ? "280px" : (props.size === "large" ? "550px" : "280px")};
  cursor: pointer;

  &:focus {
    outline: none;
  }
  &:active {
    box-shadow: none;
  }
  &:active:before {
    display: none;
  }

  @media screen and (max-width: 1400px) {
    transform: scale(0.7);
  }
  `;

function BasicButton({ onClick, size, children, theme }) {
  return (
    <StyledButton onClick={onClick} size={size} theme={theme ? theme : defaultTheme}>
      {children}
    </StyledButton>
  )
}

export default BasicButton;